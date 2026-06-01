export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px]" style={{ color: '#3A3A4A' }}>
          © 2026 MP Team · Pietra Giehl · Todos os direitos reservados
        </p>
        <a
          href="https://instagram.com/pietragiehl_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transition-colors duration-200 hover:text-[#A855F7]"
          style={{ color: '#3A3A4A' }}>
          @pietragiehl_ ↗
        </a>
      </div>
    </footer>
  )
}
