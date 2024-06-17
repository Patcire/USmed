import {Search} from "./Search.jsx";

export const CustomHeader = () => {
    return (
        <header className='header'>
            <section className={'headerLogo'}>
                <h1 className='header__title'>US.PILLS</h1>
                <h2 className={'header__subtitle'}>Search information for all US drugs</h2>
            </section>
            <Search></Search>
        </header>
    )
}
