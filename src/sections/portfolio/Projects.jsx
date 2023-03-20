import Cards from "../../components/Cards"

function Projects(props) {
  return (
      
     <Cards className= 'project_cards'>
        <div className="image_project"> 
        <img src= {props.project_main.image} alt = 'projects_images'></img></div>
        <h4> {props.project_main.title}</h4>
        <p>{props.project_main.desc}</p>
        <div className="project_buttons">
            {/* <a href={props.project_main.demo} className='btn sm ' target='blank' rel ='noopner noreferrer'>Demo</a> */}
            <a href={props.project_main.github}  className='btn sm primary' target='blank' rel ='noopner noreferrer'>Github</a>
        </div>
      </Cards>
   
  )
}

export default Projects