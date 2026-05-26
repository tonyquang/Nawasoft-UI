import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Liên hệ với chúng tôi</h2>
        <p className="mt-2 text-muted-foreground">
          Đội ngũ NawaSoft sẵn sàng hỗ trợ bạn trong giờ làm việc.
        </p>
      </div>

      {/* Online badge */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        <span className="text-sm font-medium text-green-500">
          Đang trực tuyến
        </span>
      </div>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="text-sm text-muted-foreground">
            431 Tô Hiến Thành, P. Diên Hồng, Q.10, TP.HCM
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-primary" />
          <a
            href="tel:0847755599"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            0847 755 599
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <a
            href="mailto:info@2dd.asia"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            info@2dd.asia
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Globe className="h-5 w-5 shrink-0 text-primary" />
          <a
            href="https://2dd.asia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            2dd.asia
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Clock className="h-5 w-5 shrink-0 text-primary" />
          <span className="text-sm text-muted-foreground">
            T2–T7: 8:00–22:00
          </span>
        </li>
      </ul>
    </div>
  );
}
