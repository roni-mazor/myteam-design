import facebook from "../assets/images/icon-facebook.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
export const MainFooter = () => {


    return (
        <section className="main-footer">
            <section className="inner-nav-container" >
                <h2>myteam</h2>
                <section>
                    <h5>home</h5>
                    <h5>about</h5>
                </section>
            </section>
            <section className="details-container">
                <p>987  Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p>
            </section>
            <section className="links">
                <section className="links-container">
                    <img src={facebook} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={twitter} alt="" />
                </section>

                <p>Copyright 2020. All Rights Reserved</p>
            </section>
        </section>
    )
}