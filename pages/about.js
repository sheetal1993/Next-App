import axios from 'axios'

const About = ({ buildTimestamp, data }) => {
  return (
    <p>
      Hello From my next.js app! Testing this 
      App built at: {buildTimestamp}
      Message: {data}
    </p>
  )
}

export async function getStaticProps() {
  const {data} = await axios.get(process.env.NETLIFY_URL + '/api/1-hello');

  return {
      props: {
          data: data,
          buildTimestamp: Date.now(),
      }
  };
}

export default About;