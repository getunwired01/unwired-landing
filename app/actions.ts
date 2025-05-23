"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function submitWaitlistForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Validate inputs
    if (!name || !email) {
      throw new Error("Name and email are required")
    }

    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("Invalid email format")
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("waitlist_submissions")
      .upsert(
        {
          name,
          email,
          // If the user signs up again, update their status to active
          status: "active",
          // Update the timestamp
          created_at: new Date().toISOString(),
        },
        {
          onConflict: "email",
          ignoreDuplicates: false,
        },
      )
      .select()

    if (error) {
      console.error("Error inserting data:", error)
      throw new Error("Failed to submit form")
    }

    console.log("Waitlist submission successful:", data)

    // In a production app, you might want to:
    // 1. Send a confirmation email
    // 2. Add the user to a marketing list
    // 3. Trigger other workflows

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    throw error
  }
}
