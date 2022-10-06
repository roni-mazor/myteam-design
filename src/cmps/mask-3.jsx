import aiysha from '../assets/images/avatar-aiysha.jpg';
import kady from '../assets/images/avatar-kady.jpg';
import arthur from '../assets/images/avatar-arthur.jpg';
import quote from '../assets/images/icon-quotes.svg';

export const Mask3 = () => {

    return (
        <section className="mask-3">
            <h2 className="mask-headline">
                Delivering real results for top companies. Some of our
                <span className="blue"> success stories.</span>

            </h2>
            <section className="avatars-container">
                <article className="avatar-container">
                    <img src={quote} className="svg-container" alt="" />
                    <p className="info-container">
                        “The team perfectly fit the specialized skill set required.
                        They focused on the most essential features
                        helping us launch the platform eight months faster than planned.”
                    </p>
                    <h5 className="name-container">Kady Baker</h5>
                    <h6 className="title-container">Product Manager at Bookmark</h6>
                    <div className="avatar-img-container">
                        <img src={kady} alt="" />
                    </div>
                </article>
                <article className="avatar-container">
                    <img src={quote} className="svg-container" alt="" />
                    <p className="info-container">“We needed to automate our entire onboarding process.
                        The team came in and built out the whole journey.
                        Since going live, user retention has gone through the roof!”</p>
                    <h5 className="name-container">Aiysha Reese</h5>
                    <h6 className="title-container">Founder of Manage</h6>
                    <div className="avatar-img-container">
                        <img src={aiysha} alt="" />
                    </div>
                </article>
                <article className="avatar-container">
                    <img src={quote} className="svg-container" alt="" />
                    <p className="info-container">
                        “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio.
                        The launch was an instant success with 100k downloads in the first month.”</p>
                    <h5 className="name-container">Arthur Clarke</h5>
                    <h6 className="title-container">Co-founder of MyPhysio</h6>
                    <div className="avatar-img-container">
                        <img src={arthur} alt="" />
                    </div>
                </article>
            </section>
        </section>
    )
}