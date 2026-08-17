import { useEffect, useState } from 'react'
import { Code2, Server, Palette, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    img: '/work/elizabeth-about.jpg',
    title: 'Elizabeth Liones — Streamer Website',
    desc: 'เว็บไซต์สตรีมเมอร์ธีมอนิเมะ ออกแบบ UI/UX พร้อมระบบหน้า About, Schedule และ Subscribe',
    tag: 'Front-End • UI/UX',
  },
  {
    img: '/work/elizabeth-subscribe.jpg',
    title: 'Subscribe & Membership System',
    desc: 'หน้าระบบสมาชิก 3 แพ็กเกจ พร้อม Kingdom Rules และ footer — ดีไซน์สะอาด อ่านง่าย กดสมัครไว',
    tag: 'Front-End • Back-End',
  },
  {
    img: '/work/4rimst-links.jpg',
    title: '4rimst — Bio Links Page',
    desc: 'หน้ารวมลิงก์ส่วนตัวสไตล์มินิมอล พร้อมปุ่มโซเชียล ปุ่ม Donate และวิดเจ็ตเพลย์ลิสต์',
    tag: 'Front-End • UI/UX',
  },
]

const services = [
  { icon: Code2, title: 'Front-End', desc: 'React / Next.js หน้าเว็บเร็ว ตอบสนองทุกอุปกรณ์' },
  { icon: Server, title: 'Back-End', desc: 'API, ฐานข้อมูล และระบบหลังบ้านที่มั่นคง' },
  { icon: Palette, title: 'UI/UX Design', desc: 'ออกแบบเรียบง่าย ใช้งานง่าย สื่อแบรนด์ชัดเจน' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* Nav */}
      <header className="mx-auto flex max-w-[1280px] items-center justify-between px-10 py-6">
        <span className="text-xl font-bold tracking-tight">4rimst<span className="text-neutral-400">.</span></span>
        <nav className="flex items-center gap-8 text-sm text-neutral-500">
          <a href="#work" className="transition hover:text-neutral-900">ผลงาน</a>
          <a href="#services" className="transition hover:text-neutral-900">บริการ</a>
          <a href="#contact" className="rounded-full bg-neutral-900 px-5 py-2.5 font-semibold text-white transition hover:bg-neutral-700">ติดต่อ</a>
        </nav>
      </header>

      {/* Hero */}
      <section className={`mx-auto max-w-[1280px] px-10 pb-14 pt-10 transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">Web Developer — ประสบการณ์ 4 ปี</p>
        <h1 className="mt-4 max-w-3xl text-[52px] font-bold leading-[1.1] tracking-tight">
          รับออกแบบและพัฒนาเว็บไซต์<br />
          <span className="text-neutral-400">เรียบง่าย สวยงาม ใช้งานได้จริง</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
          Front-End • Back-End • UI/UX ครบวงจร ดูแลตั้งแต่ไอเดียจนเว็บออนไลน์ พร้อม<span className="font-semibold text-neutral-900">รับประกันงาน 30 วัน</span>หลังส่งมอบ
        </p>
        <div id="contact" className="mt-8 flex items-center gap-4">
          <a href="#work" className="group flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 font-semibold text-white transition hover:bg-neutral-700">
            เริ่มโปรเจกต์ <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#work" className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-7 py-3.5 font-semibold transition hover:border-neutral-400">
            ดูผลงาน <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex items-center gap-10 border-t border-neutral-100 pt-6 text-sm">
          <div><span className="text-xl font-bold">4+</span> <span className="text-neutral-400">ปีประสบการณ์</span></div>
          <div><span className="text-xl font-bold">40+</span> <span className="text-neutral-400">โปรเจกต์สำเร็จ</span></div>
          <div className="flex items-center gap-1.5 text-neutral-400"><ShieldCheck className="h-4 w-4 text-neutral-900" /> รับประกันงาน 30 วัน</div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-[1280px] px-10 py-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">ผลงาน</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">งานที่ผ่านมา</h2>
            </div>
            <span className="text-sm text-neutral-400">ออกแบบ + พัฒนา โดย 4rimst</span>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-xl hover:shadow-neutral-200/60">
                <div className="aspect-[16/10] overflow-hidden border-b border-neutral-100">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{p.tag}</span>
                  <h3 className="mt-1.5 font-bold leading-snug">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services + guarantee */}
      <section id="services" className="mx-auto max-w-[1280px] px-10 py-14">
        <div className="grid grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-900">
              <s.icon className="h-6 w-6" />
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-neutral-900 px-8 py-6 text-white">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-9 w-9" />
            <div>
              <div className="font-bold">รับประกันงาน 30 วัน</div>
              <div className="text-sm text-neutral-400">งานมีปัญหา แก้ไขฟรี ไม่มีเงื่อนไข</div>
            </div>
          </div>
          <a href="#contact" className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-200">
            ปรึกษาฟรี <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-10 py-5 text-sm text-neutral-400">
          <span>© 2026 4rimst — Web Developer</span>
          <span className="tracking-widest">REACT • NEXT.JS • NODE.JS • FIGMA</span>
        </div>
      </footer>
    </div>
  )
}
