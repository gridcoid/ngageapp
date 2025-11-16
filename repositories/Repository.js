import UserRepository from '~/repositories/userRepository'
import CampaignRepository from '~/repositories/campaignRepository'
import PlacementRepository from '~/repositories/placementRepository'
import CreativeRepository from '~/repositories/creativeRepository'
import TemplateRepository from '~/repositories/templateRepository'
import PublisherRepository from '~/repositories/publisherRepository'
import AudienceRepository from '~/repositories/audienceRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  campaign: CampaignRepository($axios),
  placement: PlacementRepository($axios),
  creative: CreativeRepository($axios),
  template: TemplateRepository($axios),
  publisher: PublisherRepository($axios),
  audience: AudienceRepository($axios),
})
