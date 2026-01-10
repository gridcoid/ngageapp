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
import EducationRepository from '~/repositories/educationRepository'
import ReligionRepository from '~/repositories/religionRepository'
import ContactTypeRepository from '~/repositories/contactTypeRepository'
import ApiKeyRepository from '~/repositories/apiKeyRepository'
import SheetRepository from '~/repositories/sheetRepository'
import QueryRepository from '~/repositories/queryRepository'
import DashboardRepository from '~/repositories/dashboardRepository'
import SettingRepository from '~/repositories/settingRepository'

import EmailTemplateRepository from '~/repositories/emailTemplateRepository'
import EmailCampaignRepository from '~/repositories/emailCampaignRepository'

import MailjetContactListRepository from '~/repositories/mailjetContactListRepository'
import MailjetContactRepository from '~/repositories/mailjetContactRepository'
import MailjetCampaignRepository from '~/repositories/mailjetCampaignRepository'
import MailjetTemplateRepository from '~/repositories/mailjetTemplateRepository'
import MailjetSenderRepository from '~/repositories/mailjetSenderRepository'

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
  education: EducationRepository($axios),
  religion: ReligionRepository($axios),
  contactType: ContactTypeRepository($axios),
  apiKey: ApiKeyRepository($axios),
  sheet: SheetRepository($axios),
  query: QueryRepository($axios),
  dashboard: DashboardRepository($axios),
  setting: SettingRepository($axios),

  emailTemplate: EmailTemplateRepository($axios),
  emailCampaign: EmailCampaignRepository($axios),

  mailjetContactList: MailjetContactListRepository($axios),
  mailjetContact: MailjetContactRepository($axios),
  mailjetCampaign: MailjetCampaignRepository($axios),
  mailjetTemplate: MailjetTemplateRepository($axios),
  mailjetSender: MailjetSenderRepository($axios),
})
