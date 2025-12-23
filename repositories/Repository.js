import UserRepository from '~/repositories/userRepository'
import CampaignRepository from '~/repositories/campaignRepository'
import PlacementRepository from '~/repositories/placementRepository'
import CreativeRepository from '~/repositories/creativeRepository'
import TemplateRepository from '~/repositories/templateRepository'
import PublisherRepository from '~/repositories/publisherRepository'
import AudienceRepository from '~/repositories/audienceRepository'
import SegmentRepository from '~/repositories/segmentRepository'
import ProvinceRepository from '~/repositories/provinceRepository'
import RegencyRepository from '~/repositories/regencyRepository'
import DistrictRepository from '~/repositories/districtRepository'
import VillageRepository from '~/repositories/villageRepository'
import GenderRepository from '~/repositories/genderRepository'
import ReligionRepository from '~/repositories/religionRepository'
import ContactTypeRepository from '~/repositories/contactTypeRepository'
import AudienceBySegmentRepository from '~/repositories/audienceBySegmentRepository'
import ApiKeyRepository from '~/repositories/apiKeyRepository'
import SheetRepository from '~/repositories/sheetRepository'
import QueryRepository from '~/repositories/queryRepository'
import DashboardRepository from '~/repositories/dashboardRepository'

export default ($axios) => ({
  user: UserRepository($axios),
  campaign: CampaignRepository($axios),
  placement: PlacementRepository($axios),
  creative: CreativeRepository($axios),
  template: TemplateRepository($axios),
  publisher: PublisherRepository($axios),
  audience: AudienceRepository($axios),
  segment: SegmentRepository($axios),
  province: ProvinceRepository($axios),
  regency: RegencyRepository($axios),
  district: DistrictRepository($axios),
  village: VillageRepository($axios),
  gender: GenderRepository($axios),
  religion: ReligionRepository($axios),
  contactType: ContactTypeRepository($axios),
  audienceBySegment: AudienceBySegmentRepository($axios),
  apiKey: ApiKeyRepository($axios),
  sheet: SheetRepository($axios),
  query: QueryRepository($axios),
  dashboard: DashboardRepository($axios),
})
