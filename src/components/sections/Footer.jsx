export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-8 px-6 border-t border-[#1a1a1a] mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-[#999999]">&copy; {new Date().getFullYear()} Louis Nguyen. All rights reserved.</p>
      </div>
    </footer>
  );
};
