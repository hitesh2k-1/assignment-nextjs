import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCard from "@/components/StarCard";
import ReviewsSection from "@/components/ReviewSection";
import CourseSection from "@/components/CourseSection";
import WhyJoinCourse from "@/components/WhyJoin";
import CourseCurriculum from "@/components/CourseCurriculum";
import BonusSection from "@/components/BonunsSection";
import OfferSection from "@/components/OfferSection";
import MentorCard from "@/components/MentorCard";
import CourseBenefits from "@/components/CourseBenifits";
import Reviews2 from "@/components/Reviews2";
import Reasons from "@/components/Reasons";

export const metadata = {
  title: "FrontEnd-Assignment",
  description: "This is a clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <HeroSection/>
        <StatsCard/>
        <ReviewsSection/>
        <CourseSection/>
        <WhyJoinCourse/>
        <CourseCurriculum/>
        <BonusSection/>
        <OfferSection/>
        <MentorCard/>
        <CourseBenefits/>
        <Reviews2/>
        <Reasons/>
        <Footer/>
      </body>
    </html>
  );
}
