import PropTypes from 'prop-types';

function Banner(props){
    const {backgroundImage, className, titleClassName, subtitleClassName, title, subtitle, credits, children} = props;
    return(
        <div style={backgroundImage && {backgroundImage: backgroundImage}} class={className}>
            <h2 className={titleClassName}>
                {title}
            </h2>
            <h4 className={subtitleClassName}>
                {subtitle}
            </h4>
            {children}
            {credits}
        </div>
    )
}

Banner.propTypes = {
    backgroundImage: PropTypes.string,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    credits: PropTypes.element
}

export default Banner;