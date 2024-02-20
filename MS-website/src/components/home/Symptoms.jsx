import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Symptoms() {
  return (
    <div className='symptoms' >
      <div className='text-center mx-auto text-capitalize mb-5' >
        <h2 className='sym-tit'>symptoms</h2>
        <div className="tit-line mb-2 bg-white"></div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}
          contentStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}
          contentStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}
          contentStyle={{ background: 'rgba(25,120,173,1)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Symptoms