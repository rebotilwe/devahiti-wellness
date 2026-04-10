import { useEffect } from 'react';

export default function CalendlyEmbed({ url }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const oldScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (oldScript) oldScript.remove();
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[320px] h-[700px]"
      data-url={url}
    />
  );
}