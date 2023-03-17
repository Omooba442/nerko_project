const Logo = () => {
    return (        
        <>
            <img className="uk-visible dark:uk-hidden" width="120" src="/images/nerko-light.png" alt="Nerko" loading="lazy" /> 
            <img className="uk-hidden dark:uk-visible" width="120" src="/images/nerko-dark.png" alt="Nerko" loading="lazy" /> 
        </>
    )
}

export default Logo;