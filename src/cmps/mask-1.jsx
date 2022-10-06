import svg from "../assets/images/bg-pattern-home-2.svg";

export const Mask1 = () => {

    return (
        <section className="mask-1">

            <header className="main-app-header">
                <h1>myteam</h1>
                <section className="btns-container">
                    <section className="nav-btns-container">
                        <h5>home</h5>
                        <h5>about</h5>
                    </section>
                    <button className='contact-us-btn'>contact us</button>
                </section>
            </header>
            <section className="middle-section">
                <article className="big-txt-container">
                    Find the
                    <br />
                    best
                    <span className="pink"> talent</span>
                </article>
                <article className="small-txt-container">
                    <div className="rectangle blue"></div>
                    Finding the right people and building high performing teams can be hard.
                    Most companies aren’t tapping into the abundance of global talent.
                    We’re about to change that.
                </article>
            </section>
            <img className="svg-container" src={svg} alt="" />
        </section>
    )
}