import React, { useEffect, useState } from "react";

const LazyLoadAd = ({ adSlot, adStyle }) => {
  const [hasError, setHasError] = useState(false);
  const adClient = "ca-pub-9556792412506302";

  useEffect(() => {
    const adContainer = document.querySelector("#lazy-ad");
    if (
      adContainer &&
      adContainer.offsetWidth > 0 &&
      adContainer.offsetHeight > 0
    ) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        setHasError(true);
        // Sentry.captureException(err);
      }
    } else {
      //   setTimeout(initializeAd, 500);
    }
  }, [adClient]);

  return (
    <div
      id="lazy-ad"
      className="my-4 flex w-full items-center justify-center rounded border-2 border-white p-2"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      {hasError ? (
        <div className="text-sm text-red-600">Ad failed to load</div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            height: "100px",
            ...adStyle,
          }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="true"
        />
      )}
    </div>
  );
};

export default LazyLoadAd;
