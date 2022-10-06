import svg from "../assets/images/bg-pattern-home-3.svg";

export const FirstFooter = () => {


    return (
        <section className="first-footer">
            <section className="side-svg-container">

                <img src={svg} alt="" />
            </section>

            <h2>
                Ready to get started?
            </h2>
            <button className='contact-us-btn'>contact us</button>
        </section>
    )
}