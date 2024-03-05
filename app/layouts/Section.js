import { HiOutlineTrophy } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Content from "./Content";
import Button from "./Button";
import { IoDiamondOutline } from "react-icons/io5";
import Review from "./Review";

const Section = () => {
  return (
    <div>
      <div>
        <Content
          lb={true}
          icon={<HiOutlineTrophy size={20} />}
          trend={"Best Choice"}
          no={1}
          img="Builder.svg"
          title={"Builder 1"}
          he1={"WixPro 72-Inch Responsive Website Builder-"}
          desc1={
            " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)"
          }
          he2={"Main highlights"}
          desc2={
            "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and app, and detailed step-by-step guides."
          }
          icon2={<IoIosArrowDown />}
          review={<Review rno={"9.8"} rm={"Exceptional"} />}
        />
        <Content
          lb={true}
          icon={<IoDiamondOutline size={20} />}
          trend={"Best Value"}
          no={2}
          img="Builder.svg"
          title={"Builder"}
          he1={"SideCraft 68-Inch Ultimate Web Design Stdio-"}
          desc1={
            " Advanced Site Creation ToolKit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          }
          he2={"Main highlights"}
          desc2={
            "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          }
          icon2={<IoIosArrowDown />}
          review={<Review rno={"9.5"} rm={"Excellent"} />}
        />
        <Content
          no={3}
          img="Builder.svg"
          title={"Builder 1"}
          he1={"WixPro 72-Inch Responsive Website Builder-"}
          desc1={
            " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/Blue)"
          }
          he2={"Main highlights"}
          desc2={
            "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and app, and detailed step-by-step guides."
          }
          review={<Review rno={"9.3"} rm={"Exceptional"} />}
        />
        <Content
          lb={false}
          no={4}
          img="Builder.svg"
          title={"CDK"}
          he1={"CDK Responsive Builder:"}
          desc1={
            " An extensive library of widgets and apps, and detailed step-by-step guides"
          }
          off={"26% Off"}
          he2={"Main highlights"}
          hl={true}
          n1={"9.9"}
          t1={"Building Responsive"}
          n2={"8.9"}
          t2={"Cool"}
          n3={"8.9"}
          t3={"Docs"}
          review={<Review rno={"9.1"} rm={"Very Good"} />}
        />
      </div>
    </div>
  );
};

export default Section;
