export default function Logo() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="45"
        height="45"
        viewBox="0 0 100 100"
        role="img"
        aria-hidden="true"
      >
        <title>AJ CB Logo</title>
        <polygon
          points="25,5 75,5 95,25 95,75 75,95 25,95 5,75 5,25"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="currentColor"
        >
          AJ
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="currentColor"
        >
          CB
        </text>
      </svg>
      <span className="sr-only">AJ Batanes</span>
    </>
  );
}
