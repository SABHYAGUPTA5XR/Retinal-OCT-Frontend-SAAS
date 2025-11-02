"use client";

import { uploadFileWrapper } from "@/lib/actions/image.action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type uploadFormProps = {
  ClerkID: string;
  credits: number;
};
const initialState = { status: "", message: "" };

export function UploadForm({ ClerkID, credits }: uploadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, formAction] = useActionState(uploadFileWrapper, initialState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || credits === 0) return;

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        await formAction({ formData, ClerkID });
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsSubmitting(false);
        // refresh so credits update — short delay for UX
        setTimeout(() => router.refresh(), 800);
      }
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 text-center">
        <div>
          <Label htmlFor="file" className="block text-lg font-medium text-gray-700">
            Upload image
          </Label>

          {/* File input styled to be larger and centered */}
          <div className="mt-3">
            <Input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              className="mx-auto block w-full cursor-pointer py-3 px-4 text-center rounded-lg border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-48 h-14 text-lg font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 text-white"
            disabled={isSubmitting || credits === 0 || isPending}
            aria-busy={isSubmitting || isPending}
          >
            {isSubmitting || isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {/* status message */}
        {state?.status && (
          <div
            className={`mx-auto px-4 py-3 rounded text-base max-w-prose ${
              state.status === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {state?.message}
          </div>
        )}

        {/* no credits warning */}
        {credits === 0 && (
          <div className="text-sm text-red-600 font-medium">You have no credits left.</div>
        )}
      </form>
    </div>
  );
}
