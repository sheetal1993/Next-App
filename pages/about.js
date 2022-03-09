const About = ({ buildTimestamp }) => {
  return (
    <p>
      Hello From my next.js app! Testing this 
      App built at: {buildTimestamp}
    </p>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now()
    }
  }
}

export default About;