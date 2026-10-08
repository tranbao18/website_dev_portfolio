import type { SocialIconName } from "@/components/SocialIcon";

export const profile = {
  name: "Trần Thiên Bảo",
  logo: "Bảo Trần",
  email: "baotrn.dev@gmail.com",
  phone: "0774.858.314",
  phoneHref: "tel:0774858314",
  facebook: "https://www.facebook.com/gil.mark.773",
  location: "TP. Hồ Chí Minh, Việt Nam",
};

export const socials: { icon: SocialIconName; label: string; href: string }[] = [
  { icon: "github", label: "GitHub", href: "https://github.com/tranbao18" },
  { icon: "facebook", label: "Facebook", href: profile.facebook },
  { icon: "gmail", label: "Email", href: `mailto:${profile.email}` },
  { icon: "phone", label: "Điện thoại", href: profile.phoneHref },
];
