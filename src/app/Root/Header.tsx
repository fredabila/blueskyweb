import type { AppBskyActorProfile } from "@atproto/api";
import { Link, useLocation, useNavigation } from "react-router-dom";
import { TbReload } from "react-icons/tb";
import LogoIcon from "@/src/assets/icon.svg";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { IconButton } from "@camome/core/IconButton";

import styles from "./Header.module.scss";
import Avatar from "@/src/components/Avatar";
import { queryKeys } from "@/src/lib/queries";

type Props = {
  profile: AppBskyActorProfile.View;
};

export default function Header({ profile }: Props) {
  const { state } = useNavigation();

  return (
    <header className={styles.container}>
      <div className={styles.progressBar}>
        {state === "loading" && (
          <div role="status">
            <span className="visually-hidden">データを取得中・・・</span>
          </div>
        )}
      </div>
      <Link to="/" className={styles.logo}>
        <LogoIcon />
        <span className={styles.logo__text}>Flat</span>
      </Link>
      <Avatar size="sm" profile={profile} isLink className={styles.avatar} />
    </header>
  );
}
