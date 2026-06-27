import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={56} reverse speed={40} speedOnHover={15}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-5 select-none md:h-6 opacity-65 hover:opacity-90 transition-opacity duration-300"
            height={logo.height ?? 24}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width ?? "auto"}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
