const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // CLS (Cumulative Layout Shift): Visual stability (do elements jump around?)
      getCLS(onPerfEntry);

      // FID (First Input Delay): Interactivity (how fast does it react to a click?)
      getFID(onPerfEntry);

      // FCP (First Contentful Paint): Perceived load speed (when does the first text/image appear?)
      getFCP(onPerfEntry);

      // LCP (Largest Contentful Paint): Loading performance (when is the main content visible?)
      getLCP(onPerfEntry);

      // TTFB (Time to First Byte): Server response time
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;