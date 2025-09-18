import Image from "next/image";
import Navbar from "../Components/Navbar";
import AboutUsSection from "@/Components/AboutUsSection";
export default function Home() {
  return (
  <div className="font-kanit antialiased bg-gray-50 text-gray-900">
    {/* <!-- Header Section --> */}
    <Navbar />
    

    {/* <!-- Hero Section --> */}
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* <!-- Hero Title --> */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ยินดีต้อนรับสู่
            <span className="text-blue-600">เว็บไซต์ของเรา</span>
          </h1>

          {/* <!-- Hero Subtitle --> */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            เรามีบริการที่ครบครันและทีมงานมืออาชีพ
            พร้อมให้บริการคุณด้วยความใส่ใจและคุณภาพสูงสุด
          </p>

          {/* <!-- Hero CTA Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>เริ่มต้นเลย</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <i className="fas fa-play"></i>
              <span>ดูวิดีโอ</span>
            </button>
          </div>
        </div>
      </div>
    </section>

{/* <!-- Values Section --> */}
<AboutUsSection/>
    
    {/* <!-- Values Section --> */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* <!-- Section Title --> */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ค่านิยมของเรา</h2>
          <p className="text-xl text-gray-600">สิ่งที่เรายึดถือและปฏิบัติ</p>
        </div>

        {/* <!-- Values Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* <!-- Value 1 --> */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="fas fa-heart text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">ความใส่ใจ</h3>
            <p className="text-gray-600 leading-relaxed">
              เรามุ่งมั่นในการให้บริการด้วยความใส่ใจและเข้าใจความต้องการของลูกค้า
            </p>
          </div>

          {/* <!-- Value 2 --> */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="fas fa-star text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">คุณภาพ</h3>
            <p className="text-gray-600 leading-relaxed">
              เรามุ่งมั่นในการส่งมอบผลงานที่มีคุณภาพสูงสุดและตรงตามความต้องการ
            </p>
          </div>

          {/* <!-- Value 3 --> */}
          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div
              className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="fas fa-lightbulb text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">นวัตกรรม</h3>
            <p className="text-gray-600 leading-relaxed">
              เราพัฒนาและปรับปรุงบริการอย่างต่อเนื่องด้วยเทคโนโลยีที่ทันสมัย
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี หรือสอบถามข้อมูลเพิ่มเติม
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <i className="fas fa-phone"></i>
            <span>โทรเลย</span>
          </button>
          <button
            className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <i className="fas fa-envelope"></i>
            <span>ส่งอีเมล</span>
          </button>
        </div>
      </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Company Info --> */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Your</span>Brand
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              บริษัทที่ให้บริการครบครันด้วยทีมงานมืออาชีพ
              พร้อมให้คำปรึกษาและบริการที่ดีที่สุด
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  >หน้าแรก</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  >บริการ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  >เกี่ยวกับเรา</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  >ติดต่อ</a
                >
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>02-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@yourbrand.com</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>123 ถนนสุขุมวิท กรุงเทพฯ 10110</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 YourBrand. สงวนลิขสิทธิ์ทั้งหมด</p>
        </div>
      </div>
    </footer>
  </div> );
  }
