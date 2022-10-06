import chart from "../assets/images/icon-chart.svg";
import cog from "../assets/images/icon-cog.svg";
import person from "../assets/images/icon-person.svg";
import svg from "../assets/images/bg-pattern-home-3.svg";


export const Mask2 = () => {

    return (
        <section className="mask-2">
            <section className="content-container">
                <div className="rectangle red"></div>
                <article className="medium-txt">
                    Build & manage distributed teams like no one else.
                </article>
                <section className="features-container">
                    <article className="feature-container">
                        <h3 className="headline-container">Experienced Individuals</h3>
                        <p className="txt-container">
                            Our network is made up of highly experienced professionals
                            who are passionate about what they do.
                        </p>
                        <img src={person} alt="" className="svg-container" />
                    </article>
                    <article className="feature-container">
                        <h3 className="headline-container">Easy to Implement</h3>
                        <p className="txt-container">
                            Our processes have been refined over years of implementation
                            meaning our teams always deliver.
                        </p>
                        <img src={cog} alt="" className="svg-container" />
                    </article>
                    <article className="feature-container">
                        <h3 className="headline-container">Enhanced Productivity</h3>
                        <p className="txt-container">
                            Our customized platform with in-built analytics
                            helps you manage your distributed teams.
                        </p>
                        <img src={chart} alt="" className="svg-container" />
                    </article>

                </section>
            </section>
            <section className="side-svg-container">

                <img src={svg} alt="" />
            </section>
        </section>
    )
}