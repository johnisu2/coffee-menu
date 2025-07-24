export default function Home() {
  const images = [
    '/images/pic1.webp',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
    '/images/pic4.jpeg',
    '/images/pic5.jpg',
  ];

  return (
    <main style={{ margin: 0, padding: 0 }}>
      {images.map((src, idx) => (
        <section
          key={idx}
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={src}
            alt={`image-${idx + 1}`}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </section>
      ))}
    </main>
  );
}
