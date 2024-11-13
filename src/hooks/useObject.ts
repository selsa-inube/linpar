import { getStaffPortalByBusinessManager } from "@src/services/cards";
import { IPortalStaff } from "@src/services/cards/types";
import { normalizeOptionsByPublicCode } from "@src/utils/options";
import { useState, useEffect } from "react";

export const useOptionsByBusinessunits = (
  staffPortalId: string,
  businessUnitPublicCode: string
) => {
  const [optionsData, setOptionsData] = useState<IPortalStaff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchOptionsByBusinessUnits = async () => {
      setLoading(true);
      try {
        const newOptions = await getStaffPortalByBusinessManager(
          staffPortalId,
          businessUnitPublicCode
        );
        setOptionsData(newOptions);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOptionsByBusinessUnits();
  }, []);

  const optionsCards = optionsData
    .filter((option) => normalizeOptionsByPublicCode(option.publicCode))
    .map((option) => {
      const normalizedOption = normalizeOptionsByPublicCode(option.publicCode);
      return {
        id: option.publicCode,
        label: option.abbreviatedName,
        description: option.descriptionUse,
        icon: normalizedOption?.icon || "",
        url: normalizedOption?.url || "",
      };
    });

  return { optionsCards, hasError, loading };
};
