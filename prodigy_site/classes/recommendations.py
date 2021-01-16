import numpy
import scipy.stats
import time


def sim(profile1, profile2) -> float:
    arrprof1 = []
    arrprof2 = []

    arrprof1.append(profile1.get_age_category())
    arrprof2.append(profile2.get_age_category())

    arrprof1.append(profile1.get_gender_shifted())
    arrprof2.append(profile2.get_gender_shifted())

    arrprof1.append(profile1.get_fields_interest_shifted())
    arrprof2.append(profile2.get_fields_interest_shifted())

    arrprof1.append(profile1.get_fields_help_shifted())
    arrprof2.append(profile2.get_fields_help_shifted())

    arrprof1.append(profile1.get_challenging_courses_shifted())
    arrprof2.append(profile2.get_challenging_courses_shifted())

    arrprof1.append(profile1.get_study_time_shifted())
    arrprof2.append(profile2.get_study_time_shifted())

    arrprof1.append(profile1.get_careers_interest_shifted())
    arrprof2.append(profile2.get_careers_interest_shifted())

    arrprof1.append(profile1.get_sports_interest_shifted())
    arrprof2.append(profile2.get_sports_interest_shifted())

    return scipy.stats.pearsonr(arrprof1, arrprof2)[0]  # hi!!
