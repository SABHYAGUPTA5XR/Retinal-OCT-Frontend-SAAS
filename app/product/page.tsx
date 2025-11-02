import { auth } from "@clerk/nextjs/server";
import { UploadForm } from "./form";
import { redirect } from "next/navigation";
import Credits from "./credits";
import { getUserCredits } from "@/lib/actions/user.action";

export default async function Page() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const credits = (await getUserCredits(userId)) as number;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-2xl px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Upload Files to S3 Bucket
          </h1>

          <Credits credits={credits} />

          <div className="mt-6">
            <UploadForm ClerkID={userId} credits={credits} />
          </div>
        </div>
      </div>
    </div>
  );
}
