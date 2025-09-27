import Image from 'next/image';

export default function AssessmentPage() {
  return (
    <div>
      <Image
        src="/your-image.jpg" // Update with your actual image path
        width={500}
        height={300}
        alt="Assessment Illustration"
        priority
      />
    </div>
  );
}