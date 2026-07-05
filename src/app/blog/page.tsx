export default function BlogRedirect() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "window.location.replace('/content')",
      }}
    />
  );
}
