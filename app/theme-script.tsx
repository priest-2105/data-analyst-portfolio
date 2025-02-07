export function ThemeScript() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.getItem('theme') === 'dark' ||
                 (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (_) {}
          `,
        }}
      />
    )
  }
  
  