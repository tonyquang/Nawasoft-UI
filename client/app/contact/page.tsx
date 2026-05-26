import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactInfo } from "./_components/ContactInfo";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ | NawaSoft",
  description: "Liên hệ với đội ngũ NawaSoft để được tư vấn và hỗ trợ.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-28">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold md:text-4xl">
          Liên hệ với chúng tôi
        </h1>
        <p className="mt-3 text-muted-foreground">
          Điền form bên dưới — chúng tôi sẽ phản hồi trong vòng 24 giờ.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          {/* Suspense required because ContactForm uses useSearchParams */}
          <Suspense
            fallback={
              <div className="h-96 animate-pulse rounded-2xl bg-muted" />
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
