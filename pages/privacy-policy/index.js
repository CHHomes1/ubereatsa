import React from "react";
import HomeNav1 from "../../components/Nav/HomeNav1";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Head from "next/head";

const style = {
  wrapper: "",
  small: "font-semibold text-xl md:text-2xl my-6",
  heading: "text-2xl md:text-3xl font-bold text-center my-12",
  para: "",
  para1: "mx-4 md:mx-6",
  para2: "mx-4 md:mx-6 underline text-blue-600",
};
const index = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>NetDelivery | Privacy Policy</title>
        <meta
          name="description"
          content="NetDelivery | Privacy Policy"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HomeNav1 visibility={true} />
      <div className="py-24 md:py-36 w-[90%] md:w-[75%] mx-auto">
        <h2 className={style.heading}>Privacy Policy</h2>
        <h3 className={style.small}>Privacy Policy</h3>
        <p className={style.para}>
          NetDelivery built the NetDelivery app as a Free app. This SERVICE is
          provided by NetDelivery at no cost and is intended for use as is.{" "}
        </p>
        <p className={style.para}>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </p>
        <p className={style.para}>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p className={style.para}>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which are accessible at NetDelivery unless
          otherwise defined in this Privacy Policy.
        </p>
        <h3 className={style.small}>Information Collection and Use</h3>

        <p className={style.para}>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information, including
          but not limited to Net Delivery Pvt . Ltd. The information that I
          request will be retained on your device and is not collected by me in
          any way.
        </p>
        <p className={style.para}>
          The app does use third-party services that may collect information
          used to identify you.
        </p>
        <p className={style.para}>
          Link to the privacy policy of third-party service providers used by
          the app
        </p>
        <Link href="https://policies.google.com/privacy">
          <li className={style.para2}>Google Play Services</li>
        </Link>
        {/* <Link href=""> */}
        <li className={style.para1}>Location</li>
        {/* </Link> */}
        <Link href="https://firebase.google.com/policies/analytics">
          <li className={style.para2}>Google Analytics for Firebase</li>
        </Link>
        <Link href="https://firebase.google.com/support/privacy">
          <li className={style.para2}>Firebase Crashlytics</li>
        </Link>
        <h3 className={style.small}>Log Data</h3>
        <p className={style.para}>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third-party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </p>
        <h3 className={style.small}>Cookies</h3>
        <p className={style.para}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory.
        </p>
        <p className={style.para}>
          This Service does not use these “cookies” explicitly. However, the app
          may use third-party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </p>
        <h3 className={style.small}>Service Providers</h3>

        <p className={style.para}>
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <li className={style.para1}>To facilitate our Service;</li>
        <li className={style.para1}>To provide the Service on our behalf;</li>
        <li className={style.para1}>To perform Service-related services; or</li>
        <li className={style.para1}>
          To assist us in analyzing how our Service is used.
        </li>
        <p className={style.para}>
          I want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <h3 className={style.small}>Security</h3>

        <p className={style.para}>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </p>
        <h3 className={style.small}>Links to Other Sites</h3>
        <p className={style.para}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h3 className={style.small}>Children’s Privacy</h3>
        <p className={style.para}>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case I discover that a child under 13
          has provided me with personal information, I immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact me so that I will be able to do the necessary actions.
        </p>
        <h3 className={style.small}>Changes to This Privacy Policy</h3>
        <p className={style.para}>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p className={style.para}>This policy is effective as of 2022-08-13</p>
        <h3 className={style.small}>Contact Us</h3>
        <p className={style.para}>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at NetDelivery Pvt Ltd.
        </p>
        <p className={style.para}>
          . For any queries, please contact us on the below Telephone: 010 500
          0124 Email: support@netdelivery.co.za
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default index;
