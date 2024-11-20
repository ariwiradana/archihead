import { syne } from "@/lib/fonts";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiSolidEnvelope,
  BiSolidPhone,
} from "react-icons/bi";
import Input from "../elements/input";
import Textarea from "../elements/textarea";
import { FiArrowUpRight } from "react-icons/fi";
import ButtonLight from "../elements/button.light";
import { SocialData } from "@/constants/socials";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";

type FormData = {
  name: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  message: "",
};

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const message = `https://api.whatsapp.com/send?phone=${SocialData.phone}&text=Halo, saya ${formData.name}%0A%0A${formData.message}`;
      window.open(message);
      setFormData(initialFormData);
      toast.success(
        "Success! Your message has been received. Please wait for a response.",
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  const t = useTranslations();

  return (
    <section
      className="mx-auto max-w-screen-2xl bg-dark px-6 py-10 md:p-16 lg:p-20"
      id="Contact"
    >
      <Toaster />
      <div
        className={`mb-6 flex w-full flex-col items-start gap-6 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 ${syne.className}`}
      >
        <h2 className="whitespace-nowrap text-4xl font-medium text-white md:text-5xl">
          {t("contact.title")}
        </h2>
        <div className="h-[1px] w-[10%] bg-white lg:w-full"></div>
        <p className="text-base text-white/70 lg:text-end">
          {t("contact.desc")}
        </p>
      </div>
      <div
        className={`flex flex-col-reverse justify-between gap-10 lg:flex-row lg:gap-[120px] ${syne.className}`}
      >
        <div className="flex w-full flex-col justify-between gap-10 lg:w-[45vw]">
          <ul className="text-white">
            <li className="mb-2">
              <Link
                aria-label={`link-email`}
                target="_blank"
                href={`mailto:${SocialData.email}`}
                className="flex items-center gap-5"
              >
                <BiSolidEnvelope className="text-xl lg:text-2xl" />
                <span className="text-base lg:text-lg">{SocialData.email}</span>
              </Link>
            </li>
            <li className="mb-8">
              <Link
                aria-label={`link-phone`}
                target="_blank"
                href={`tel:${SocialData.phone}`}
                className="flex items-center gap-5"
              >
                <BiSolidPhone className="text-xl lg:text-2xl" />
                <span className="text-base lg:text-lg">{SocialData.phone}</span>
              </Link>
            </li>
            <li className="mb-8">
              <p className="text-lg text-white">{t("contact.address")}</p>
              <p className="text-white/70">
                Jalan Slebew Barat No 15 B, Denpasar Barat, Bali, Indonesia,
                80361
              </p>
            </li>
            <li className="flex gap-6">
              <Link
                aria-label={`link-instagram`}
                target="_blank"
                href={SocialData.instagram}
              >
                <BiLogoInstagram className="text-2xl text-white lg:text-3xl" />
              </Link>
              <Link
                aria-label={`link-facebook`}
                target="_blank"
                href={SocialData.facebook}
              >
                <BiLogoFacebook className="text-2xl text-white lg:text-3xl" />
              </Link>
              <Link
                aria-label={`link-whatsapp`}
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${SocialData.phone}`}
              >
                <BiLogoWhatsapp className="text-2xl text-white lg:text-3xl" />
              </Link>
            </li>
          </ul>
          <p className="text-sm text-white lg:text-base">
            {t("contact.copyright")}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 lg:w-[55vw]"
        >
          <Input
            onChange={handleChange}
            name="name"
            value={formData.name}
            label={t("contact.name")}
            id="name"
          />
          <Textarea
            onChange={handleChange}
            name="message"
            label={t("contact.message")}
            value={formData.message}
            id="textarea"
          />
          <div className="mt-4 flex lg:justify-end">
            <ButtonLight
              aria-label="button-contact-send-message"
              disabled={!formData.name || !formData.message}
              title={t("contact.button")}
              icon={<FiArrowUpRight />}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
