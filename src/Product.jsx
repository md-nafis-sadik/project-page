import { useEffect } from "react";
import "./Product.css";
import {
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";

export default function Product() {
  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const image = document.querySelector(".scroll-image");

    const scrollEffect = () => {
      const imgHeight = image.offsetHeight;
      const containerHeight = container.offsetHeight;
      const diff = imgHeight - containerHeight;

      // Initially set the image at the bottom
      image.style.bottom = `-${diff}px`;

      // Function to handle the mouse enter event
      container.addEventListener("mouseenter", () => {
        image.style.transition = "bottom 11s linear";
        image.style.bottom = "0";
      });

      // Function to handle the mouse leave event
      container.addEventListener("mouseleave", () => {
        image.style.transition = "bottom 11s linear"; // Ensure a smooth transition back
        image.style.bottom = `-${diff}px`;
      });
    };

    scrollEffect();

    window.addEventListener("resize", scrollEffect);

    return () => {
      window.removeEventListener("resize", scrollEffect);
    };
  }, []);

  return (
    <section>
      <div className="page-title flex justify-center sm:block bg-[#4fb92c] text-white ">
        <h1 className="py-2 md:py-3 lg:py-4 text-lg md:text-xl lg:text-2xl mx-[5%] sm:mx-[6%] md:mx-[10%] lg:mx-[10%] xl:mx-[12%]">
          E-Commerce Website 26
        </h1>
      </div>
      <div className="bg-gray-100 py-14">
        <div className="product-container mx-[5%] sm:mx-[6%] md:mx-[10%] lg:mx-[10%] xl:mx-[12%]">
          <div className="middle-left block lg:flex">
            <div className="w-full lg:w-[68%]">
              <div>
                <h1 className="product-title text-[30px] lg:text-[37px] xl:text-[43px] font-[350] text-[#4caf50] mb-8">
                  E-Commerce Website 26
                </h1>
              </div>

              <div className="mx-auto">
                <div className="scroll-container relative h-[350px] md:h-[380px] overflow-hidden rounded-md">
                  {/* <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
                  <div className="eye absolute bottom-0 left-[46%] lg:left-[47%] opacity-0 transition-opacity duration-300 transition-transform duration-600 group-hover:opacity-100 group-hover:translate-y-[-70px] sm:group-hover:translate-y-[-130px] md:group-hover:translate-y-[-150px] lg:group-hover:translate-y-[-140px] xl:group-hover:translate-y-[-170px]"><FaEye className="text-white text-4xl"/></div> */}
                  <img
                    src="product.png"
                    className="scroll-image absolute w-full"
                  />
                </div>
              </div>

              <div className="block md:flex justify-between mt-8">
                <button className="bg-[#4fb92c] transition-bg duration-500 hover:bg-[#47a727] text-white p-3 w-full md:w-[60%] mb-4 md:mb-0 rounded-3xl bg-custom-gradient text-xs">
                  ডেমো দেখুন ক্লিক করে
                </button>
                <button className="bg-[#4fb92c] transition-bg duration-500 hover:bg-[#47a727] text-white p-3 w-full md:w-[30%] rounded-3xl shadow-inner bg-custom-gradient text-xs">
                  অর্ডার করতে চ্যাট করুন
                </button>
              </div>
              <h2 className="text-4xl font-bold mt-6">
                <div className="text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff6900] to-[#fcb900]">
                  <span>Tk </span>
                  <span>3000</span>
                </div>
              </h2>

              <div className="text-[#008000] text-xs sm:text-sm lg:text-[15px] mt-4">
                <p>
                  <span className="block mb-1">
                    <strong>ওয়েবসাইটের সাথে যা থাকবে</strong>
                  </span>
                  <span className="block mb-1">১. ওয়ার্ডপ্রেস ওয়েবসাইট</span>
                  <span className="block mb-1">
                    ২. ডোমেইন হোস্ট আলাদা ভাবে কিনতে হবে
                  </span>
                  <span className="block mb-1">
                    ৪. থিম থাকবে GPL লাইসেন্স এছাড়াও ওয়েবসাইটে পেমেন্ট গেটওয়ে
                    হিসাবে থাকবে বিকাশ, রকেট, ব্যাংক ট্রান্সফার অপশন। মাল্টি
                    ভেন্ডর নিতে চাইলে সেটআপ করে দেওয়া যাবে কোনো কস্ট লাগবে না।
                  </span>
                  <span className="block mb-1">
                    ৫. ডেমো ওয়েবসাইটে লোগো, টাইটেল, মেনু, ক্যাটাগরি, কন্টাক্ট
                    ইনফো, অর্থাৎ কাস্টমারের নিজের সকল ইনফো বসিয়ে দেওয়া হবে, আলাদা
                    কোনো কিছু যোগ বা বাতিল করতে চাইলে এই সকল কাজের জন্য পেমেন্ট
                    করা লাগতেও পারে আবার নাও লাগতে পারে কাজের ওপর নির্ভর করবে।
                  </span>
                </p>
                <p className="mt-2">
                  <span className="block">
                    <strong>নোট:</strong> ডেমো ডিজাইন ভালো করে দেখে অর্ডার করুন,
                    যেরকম ডেমো সাইট ঠিক সেইরকম হবে, যদি আলাদা কোনো কাস্টমাইজ
                    করতে চান এক্সট্রা পেমেন্ট করতে হবে। সাইট বুজিয়ে দেওয়ার পর
                    আপনি না বুজে সাইট এলোমেলো করলে সেটার দায়ভার আপনাকে নিতে হবে।
                  </span>
                </p>
              </div>
              <div className="flex mt-4">
                <span className="h-8 w-8 m-1 mr-4 flex items-center text-[#4fb92c]">
                  Share:{" "}
                </span>
                <span className="h-8 w-8 m-1 flex items-center px-2 border-2 border-[#4fb92c] rounded-full cursor-pointer">
                  <FaFacebookF className="text-[#4fb92c]" />
                </span>
                <span className="h-8 w-8 m-1 flex items-center px-2 border-2 border-[#4fb92c] rounded-full cursor-pointer">
                  <FaInstagram className="text-[#4fb92c]" />
                </span>
                <span className="h-8 w-8 m-1 flex items-center px-2 border-2 border-[#4fb92c] rounded-full cursor-pointer">
                  <FaTwitter className="text-[#4fb92c]" />
                </span>
                <span className="h-8 w-8 m-1 flex items-center px-2 border-2 border-[#4fb92c] rounded-full cursor-pointer">
                  <FaGooglePlusG className="text-[#4fb92c]" />
                </span>
              </div>
            </div>

            <div className="middle-right w-full sm:w-[70%] md:w-[50%] lg:w-[30%]">
              <div className="mt-8 lg:mt-0 lg:mx-8 p-8 bg-white w-full rounded-xl">
                <div className="text-xl pb-6 text-[#4fb92c]">Categories</div>
                <hr />
                <div className="pt-6">
                  <ul className="list-disc ml-5 text-green-700 text-sm xl:text-[15px]">
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Blog and Magazine Website
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        E-Commerce & Multi Vendor
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Host & IT Site
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        News Portal
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Online Radio
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Portfolio website
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Social Website Facebook
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        TV Website
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        Website
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        WHMCS Install
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="text-[#4fb92c] cursor-pointer hover:text-green-700">
                        WP Plugin
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
