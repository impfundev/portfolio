function ReactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.232 23 20.463"
    >
      <circle r="2.05" fill="currentColor"></circle>
      <g fill="none" stroke="currentColor">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

export default ReactIcon;
