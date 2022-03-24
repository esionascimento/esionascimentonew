function IconLink({ src, text }) {
    return (
        <a className="example-link" href="/#">
            <img className="example-link-icon" src={src} alt={text} />
            {text}
        </a>
    );
}

export default IconLink;
