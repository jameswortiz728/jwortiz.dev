const handleScrollTo = (props) => {
    const element = document.getElementById(props.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default handleScrollTo;