import Earth from "../assets/earth.png";
import Planet from "../assets/planet.jpg";
import Carbon from "../assets/carbon.jpg";
import Forest from "../assets/article1pic.png"


export const data = [
	{
		1: {
			para1: `In a nutshell, carbon markets are trading systems in which carbon
					credits are sold and bought. Companies or individuals can use carbon
					markets to compensate for their greenhouse gas emissions by purchasing
					carbon credits from entities that remove or reduce greenhouse gas
					emissions.`,

			para2: `One tradable carbon credit equals one tonne of carbon dioxide or the equivalent amount of a different greenhouse gas reduced, sequestered or avoided. When a credit is used to reduce, sequester, or avoid emissions, it becomes an offset and is no longer tradable.`,
			image: Forest,
		},
		2: {
			para1: ` Compliance markets are created as a result of any national, regional and/or international policy .
            Voluntary carbon markets - national and international - refer to the issuance, buying and  selling of carbon credits, on a voluntary basis.`,

			para2: `The current supply of voluntary carbon credits comes mostly from private entities that develop carbon projects, or governments that develop programs certified by carbon standards that generate emission reductions and/or removals.`,
			image: Carbon,
		},
		3: {
			para1: `As the drive to curb global warming gathers pace, carbon markets have become increasingly fundamental to achieving net-zero greenhouse-gas emissions.
            Carbon markets help mobilize resources.`,

			para2: `We’re really in the middle of a low-carbon transition right now. And what’s really important is to help finance and bring to life projects that can help us to remove and to avoid carbon emissions. And that’s what carbon markets are for`,
			image: Planet,
		},
		4: {
			para1: `Any credits available in markets are of poor quality i.e., they do not meet the above criteria. Most of the credits are not ‘additional’.`,

			para2: `In some cases, the emission reduction is not permanent. There have been instances where afforestation projects were undertaken to buy carbon credits. However, later on the planted trees were cut-off, thus reversing the reduction.`,
            image: Earth
		},
	},
];
