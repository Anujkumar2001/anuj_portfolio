import React, { useEffect, useState } from "react";

// import * as Sentry from "@sentry/react";

const LazyLoadAd = ({ adSlot, adStyle }) => {
  const [hasError, setHasError] = useState(false);
  const adClient = "ca-pub-9556792412506302";

  useEffect(() => {
    if (
      !document.querySelector(
        `script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`
      )
    ) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.setAttribute("data-ad-client", adClient);
      script.crossOrigin = "anonymous";

      script.onerror = () => {
        setHasError(true);
      };

      document.head.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          setHasError(true);
          //   Sentry.captureException(err);
        }
      };
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        setHasError(true);
        // Sentry.captureException(err);
      }
    }
  }, [adClient]);

  return (
    <div
      id="lazy-ad"
      className="my-4 flex w-full items-center justify-center rounded bg-gray-100 p-2"
      style={{ minHeight: "100px" }} // Ensure a valid ad size
    >
      {hasError ? (
        <div className="text-sm text-red-600">Ad failed to load</div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            ...adStyle,
          }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
};

export default LazyLoadAd;
