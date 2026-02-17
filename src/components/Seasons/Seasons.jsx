import Accordion from "../Accordion"
import AccordionGroup from "../AccordionGroup"
import EpisodeCard from "../EpisodeCard"
import seasonItems from "./seasonItems"
import "./Seasons.scss"

const Seasons = () => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          isArrowButton
          key={index}
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
