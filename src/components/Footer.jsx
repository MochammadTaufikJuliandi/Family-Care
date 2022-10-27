export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 absolute p-5 bg-teal-700 text-center text-white">
      <p>
        Family Care<sup>&copy;</sup> {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
}
