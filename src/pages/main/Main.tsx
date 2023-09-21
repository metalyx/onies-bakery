import Button from '../../components/button/Button'
import './Main.scss'

const Main = () => {
    return (
        <main>
            <section className='top-section'>
                <p>HAND CRAFTED</p>
                <h1>PASTRIES</h1>
            </section>
            <section className='menu_section'>
                <div className='image' />
                <article className='menu_content'>
                    <div className='text'>
                        <h2>OUR FLAVORS</h2>
                        <h3 className='special'>Fresh & Tasty!</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo laboriosam hic, qui unde excepturi pariatur
                        repellat, tenetur nostrum officiis mollitia tempore iste
                        quidem voluptas, rerum nam ducimus magnam quam fuga
                    </p>
                    <div className='button-container'>
                        <Button>Menu</Button>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Main
