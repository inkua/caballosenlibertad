import { TitleSection } from "../components/TitleSection";
import { AdopcionesCard } from "../components/adopciones/AdopcionesCard";
import Image from "next/image";

function Voluntariado() {
  const textForContactCard =
    "Si tenes conocimientos en marketing digital o veterinaria, posees experiencia en trabajo con caballos en el capo, tienes licencia de conducir, o posees cualquier otro conocimiento que aporte a alguna de las áreas mencionadas.";
  const titleForContactCard = "Ponte en contacto";
  const items = [
    {
      image: (
        <svg
          width="181"
          height="133"
          viewBox="0 0 181 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M177.823 78.6126L144.363 29.2623C140.645 23.7756 134.449 20.4875 127.823 20.4875L108.085 20.5475L107.965 5.54653C107.955 3.90752 106.616 2.57832 104.977 2.58831L5.81654 2.87814C3.98764 2.87814 2.49854 4.36724 2.49854 6.19614V109.494C2.49854 111.323 3.98764 112.812 5.81654 112.812H19.0586C19.8881 101.149 29.6022 91.9446 41.4751 91.9446C53.348 91.9446 63.0621 101.149 63.9016 112.812L118.029 112.432C119.038 100.949 128.673 91.9446 140.426 91.9446C152.179 91.9446 161.803 100.949 162.822 112.432H175.085C176.914 112.432 178.403 110.943 178.403 109.114V80.4715C178.393 79.8019 178.193 79.1623 177.823 78.6126Z"
            fill="#DFF9FF"
          />
          <path
            d="M2.49921 109.494C2.49921 111.323 3.98832 112.812 5.81722 112.812H19.0593C19.8888 101.149 29.6029 91.9445 41.4758 91.9445C53.3486 91.9445 63.0628 101.149 63.9023 112.812L118.03 112.432C119.039 100.949 128.673 91.9445 140.426 91.9445C152.179 91.9445 161.803 100.949 162.823 112.432H175.085C176.914 112.432 178.403 110.943 178.403 109.114V80.4714L1.99951 81.3309L2.49921 109.494Z"
            fill="#9FEAFF"
          />
          <path
            d="M120.428 36.4775V65.4601H158.405L141.056 40.3052C139.407 37.9067 136.678 36.4775 133.77 36.4775H120.428Z"
            fill="#9FEAFF"
          />
          <path
            d="M41.475 130.422C50.3062 130.422 57.4654 123.263 57.4654 114.431C57.4654 105.6 50.3062 98.4409 41.475 98.4409C32.6438 98.4409 25.4846 105.6 25.4846 114.431C25.4846 123.263 32.6438 130.422 41.475 130.422Z"
            fill="#9FEAFF"
          />
          <path
            d="M140.414 130.422C149.246 130.422 156.405 123.263 156.405 114.431C156.405 105.6 149.246 98.4409 140.414 98.4409C131.583 98.4409 124.424 105.6 124.424 114.431C124.424 123.263 131.583 130.422 140.414 130.422Z"
            fill="#9FEAFF"
          />
          <path
            d="M17.9902 78.7727C16.7709 78.7727 15.7815 77.7833 15.7815 76.564V20.9875C15.7815 19.7682 16.7709 18.7788 17.9902 18.7788C19.2094 18.7788 20.1988 19.7682 20.1988 20.9875V76.564C20.1988 77.7833 19.2094 78.7727 17.9902 78.7727Z"
            fill="#00638C"
          />
          <path
            d="M32.4806 79.1625C31.2614 79.1625 30.272 78.1731 30.272 76.9538V21.3772C30.272 20.158 31.2614 19.1686 32.4806 19.1686C33.6999 19.1686 34.6893 20.158 34.6893 21.3772V76.9538C34.6893 78.1731 33.6999 79.1625 32.4806 79.1625Z"
            fill="#00638C"
          />
          <path
            d="M46.9711 79.1625C45.7519 79.1625 44.7625 78.1731 44.7625 76.9538V21.3772C44.7625 20.158 45.7519 19.1686 46.9711 19.1686C48.1904 19.1686 49.1798 20.158 49.1798 21.3772V76.9538C49.1798 78.1731 48.1904 79.1625 46.9711 79.1625Z"
            fill="#00638C"
          />
          <path
            d="M61.4628 79.1625C60.2436 79.1625 59.2542 78.1731 59.2542 76.9538V21.3772C59.2542 20.158 60.2436 19.1686 61.4628 19.1686C62.6821 19.1686 63.6715 20.158 63.6715 21.3772V76.9538C63.6715 78.1731 62.6821 79.1625 61.4628 79.1625Z"
            fill="#00638C"
          />
          <path
            d="M75.9533 79.1625C74.734 79.1625 73.7446 78.1731 73.7446 76.9538V21.3772C73.7446 20.158 74.734 19.1686 75.9533 19.1686C77.1726 19.1686 78.162 20.158 78.162 21.3772V76.9538C78.162 78.1731 77.1726 79.1625 75.9533 79.1625Z"
            fill="#00638C"
          />
          <path
            d="M90.4438 79.1625C89.2245 79.1625 88.2351 78.1731 88.2351 76.9538V21.3772C88.2351 20.158 89.2245 19.1686 90.4438 19.1686C91.663 19.1686 92.6524 20.158 92.6524 21.3772V76.9538C92.6524 78.1731 91.663 79.1625 90.4438 79.1625Z"
            fill="#00638C"
          />
          <path
            d="M179.892 77.2036L146.432 27.8532C142.244 21.677 135.289 17.9892 127.823 17.9892H110.583V6.49609V6.22626C110.583 2.79832 107.795 0 104.347 0L5.8165 0.379772C2.60843 0.379772 0 2.9882 0 6.18628V109.484C0 112.692 2.60843 115.301 5.8165 115.301H16.2702C17.6494 115.301 18.7687 114.181 18.7687 112.802C18.7687 111.423 17.6494 110.304 16.2702 110.304H5.8165C5.36677 110.304 4.99699 109.934 4.99699 109.484V6.18628C4.99699 5.73655 5.36677 5.36677 5.8265 5.36677L104.357 4.99699C105.037 4.99699 105.587 5.54666 105.587 6.22626V6.49609V20.4877V110.014L67.2795 110.314C65.9004 110.324 64.791 111.453 64.801 112.832C64.811 114.201 65.9303 115.311 67.2995 115.311C67.3095 115.311 67.3095 115.311 67.3195 115.311L107.345 115.001C107.585 115.071 107.825 115.121 108.085 115.121C108.355 115.121 108.615 115.061 108.865 114.981L115.331 114.931C116.71 114.921 117.819 113.792 117.809 112.412C117.799 111.043 116.68 109.934 115.311 109.934C115.301 109.934 115.301 109.934 115.291 109.934L110.583 109.974V22.9862H127.823C133.63 22.9862 139.036 25.8545 142.294 30.6616L175.754 80.0119C175.844 80.1518 175.894 80.3017 175.894 80.4716V109.114C175.894 109.564 175.524 109.934 175.075 109.934H165.84C164.461 109.934 163.342 111.053 163.342 112.432C163.342 113.812 164.461 114.931 165.84 114.931H175.075C178.283 114.931 180.891 112.322 180.891 109.114V80.4716C180.891 79.3023 180.541 78.173 179.892 77.2036Z"
            fill="#00638C"
          />
          <path
            d="M158.405 67.9587H120.428C119.049 67.9587 117.93 66.8394 117.93 65.4602V36.4776C117.93 35.0985 119.049 33.9791 120.428 33.9791H133.77C137.508 33.9791 140.996 35.818 143.115 38.8862L160.464 64.041C160.994 64.8006 161.054 65.8 160.624 66.6195C160.184 67.439 159.335 67.9587 158.405 67.9587ZM122.927 62.9617H153.648L138.997 41.7245C137.808 40.0055 135.849 38.9761 133.76 38.9761H122.927V62.9617Z"
            fill="#00638C"
          />
          <path
            d="M41.4756 133C31.2317 133 22.9067 124.665 22.9067 114.431C22.9067 104.197 31.2417 95.8623 41.4756 95.8623C51.7094 95.8623 60.0444 104.197 60.0444 114.431C60.0444 124.665 51.7194 133 41.4756 133ZM41.4756 101.019C34.08 101.019 28.0636 107.036 28.0636 114.431C28.0636 121.827 34.08 127.843 41.4756 127.843C48.8711 127.843 54.8875 121.827 54.8875 114.431C54.8875 107.036 48.8711 101.019 41.4756 101.019Z"
            fill="#00638C"
          />
          <path
            d="M140.415 133C130.171 133 121.846 124.665 121.846 114.431C121.846 104.197 130.181 95.8623 140.415 95.8623C150.649 95.8623 158.984 104.197 158.984 114.431C158.984 124.665 150.659 133 140.415 133ZM140.415 101.019C133.019 101.019 127.003 107.036 127.003 114.431C127.003 121.827 133.019 127.843 140.415 127.843C147.81 127.843 153.827 121.827 153.827 114.431C153.827 107.036 147.81 101.019 140.415 101.019Z"
            fill="#00638C"
          />
        </svg>
      ),
      title: "Área de logistica",
      listItems: [
        "Encargado de logística de alimento y/o de viruta.",
        "Traslado de voluntarios al predio en casos excepcionales o de urgencia.",
        "Traslado de equinos.",
        "Colecta y traslado de donaciones.",
      ],
    },
    {
      image: (
        <svg
          width="173"
          height="145"
          viewBox="0 0 173 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M104.528 3.55127H162.236C162.236 3.55127 169.45 3.55127 169.45 10.7648V133.383C169.45 133.383 169.45 140.596 162.236 140.596H104.528C104.528 140.596 97.3145 140.596 97.3145 133.383V10.7648C97.3145 10.7648 97.3145 3.55127 104.528 3.55127Z"
            fill="#DFF9FF"
          />
          <path
            d="M169.45 17.9784V10.7648C169.45 8.84618 168.69 7.01477 167.332 5.66924C165.974 4.31125 164.142 3.55127 162.236 3.55127H104.528C102.609 3.55127 100.778 4.31125 99.4324 5.66924C98.0744 7.02723 97.3145 8.85864 97.3145 10.7648V17.9784H169.45Z"
            fill="white"
          />
          <path
            d="M10.7643 39.6187H97.3144C97.3144 39.6187 104.528 39.6187 104.528 46.8322V111.754C104.528 111.754 104.528 118.968 97.3144 118.968H10.7643C10.7643 118.968 3.55078 118.968 3.55078 111.754V46.8322C3.55078 46.8322 3.55078 39.6187 10.7643 39.6187Z"
            fill="#9FEAFF"
          />
          <path
            d="M10.7643 118.955H14.3649L93.7138 39.6187H10.7643C8.8457 39.6187 7.01428 40.3786 5.66875 41.7366C4.31076 43.0946 3.55078 44.926 3.55078 46.8322V111.754C3.55078 113.673 4.31076 115.504 5.66875 116.85C7.01428 118.195 8.8457 118.955 10.7643 118.955Z"
            fill="#DFF9FF"
          />
          <path
            d="M122.566 100.928C122.566 103.793 123.7 106.547 125.731 108.577C127.762 110.608 130.515 111.742 133.38 111.742C136.246 111.742 138.999 110.608 141.03 108.577C143.061 106.547 144.195 103.793 144.195 100.928C144.195 98.0624 143.061 95.309 141.03 93.2783C138.999 91.2475 136.246 90.1138 133.38 90.1138C130.515 90.1138 127.762 91.2475 125.731 93.2783C123.7 95.309 122.566 98.0499 122.566 100.928Z"
            fill="#9FEAFF"
          />
          <path
            d="M97.3143 36.0679H10.7642C2.86548 36.0679 0 42.4965 0 46.8321V111.754C0 119.653 6.44111 122.518 10.7642 122.518H50.4948V137.045H32.3675C30.4115 137.045 28.8168 138.64 28.8168 140.596C28.8168 142.552 30.4115 144.146 32.3675 144.146H75.6487C77.6047 144.146 79.1994 142.552 79.1994 140.596C79.1994 138.64 77.6172 137.045 75.6487 137.045H57.5837V122.506H97.3143C105.213 122.506 108.079 116.065 108.079 111.742V46.8321C108.079 38.9334 101.65 36.0679 97.3143 36.0679ZM100.977 111.704C100.94 113.399 100.267 115.404 97.3143 115.404H10.8016C9.11971 115.367 7.10141 114.694 7.10141 111.742V46.8321C7.10141 45.7358 7.46271 43.1693 10.7642 43.1693H97.2769C98.9713 43.2067 100.977 43.8794 100.977 46.8321V111.704Z"
            fill="#00638C"
          />
          <path
            d="M169.848 3.15203C167.818 1.12128 165.114 0 162.236 0H104.528C101.65 0 98.9465 1.12128 96.9157 3.15203C94.8849 5.18279 93.7637 7.88631 93.7637 10.7642V25.1913C93.7637 27.1473 95.3584 28.742 97.3144 28.742C99.2704 28.742 100.865 27.1473 100.865 25.1913V10.7642C100.865 9.80493 101.251 8.85808 101.937 8.17285C102.634 7.47517 103.544 7.10141 104.528 7.10141H162.236C163.22 7.10141 164.13 7.48763 164.828 8.17285C165.513 8.85808 165.899 9.80493 165.899 10.7642V28.8542H118.955C116.999 28.8542 115.404 30.4489 115.404 32.4049C115.404 34.3609 116.999 35.9556 118.955 35.9556H165.899V50.4948H118.955C116.999 50.4948 115.404 52.0895 115.404 54.0455C115.404 56.0015 116.999 57.5962 118.955 57.5962H165.899V133.382C165.899 134.341 165.513 135.288 164.828 135.973C164.142 136.671 163.22 137.045 162.236 137.045H104.528C103.544 137.045 102.634 136.659 101.937 135.973C101.251 135.288 100.865 134.341 100.865 133.382C100.865 131.426 99.2704 129.831 97.3144 129.831C95.3584 129.831 93.7637 131.426 93.7637 133.382C93.7637 136.26 94.8849 138.963 96.9157 140.994C98.9465 143.025 101.65 144.146 104.528 144.146H162.236C165.114 144.146 167.818 143.025 169.848 140.994C171.879 138.963 173 136.26 173 133.382V10.7642C173 7.88631 171.879 5.18279 169.848 3.15203Z"
            fill="#00638C"
          />
          <path
            d="M133.381 115.292C129.594 115.292 125.894 113.76 123.215 111.081C120.536 108.402 119.004 104.702 119.004 100.915C119.004 97.1274 120.536 93.4272 123.215 90.7486C125.894 88.07 129.594 86.5376 133.381 86.5376C137.169 86.5376 140.869 88.07 143.547 90.7486C146.226 93.4272 147.758 97.1274 147.758 100.915C147.758 104.702 146.226 108.402 143.547 111.081C140.869 113.76 137.169 115.292 133.381 115.292ZM133.381 93.6515C131.463 93.6515 129.594 94.4239 128.236 95.7819C126.878 97.1399 126.105 99.0087 126.105 100.927C126.105 102.846 126.878 104.715 128.236 106.073C129.594 107.431 131.463 108.203 133.381 108.203C135.3 108.203 137.169 107.431 138.527 106.073C139.885 104.715 140.657 102.846 140.657 100.927C140.657 99.0087 139.885 97.1399 138.527 95.7819C137.169 94.4364 135.3 93.6515 133.381 93.6515Z"
            fill="#00638C"
          />
        </svg>
      ),
      title: "Área fuera del campo",
      listItems: [
        "Generador/a de ideas para recaudar fondos.",
        "Administrador/a de redes.",
        "Aportando conocimientos de tu profesión y/o dictando cursos a beneficio.",
        "Manejo de Photoshop para diseño de flyers.",
      ],
    },

    {
      image: (
        <svg
          width="178"
          height="141"
          viewBox="0 0 178 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M164.104 129.249V130.749H165.604H171.479C172.64 130.749 173.752 131.21 174.573 132.031C175.393 132.851 175.854 133.964 175.854 135.125C175.854 136.285 175.393 137.398 174.573 138.219C173.752 139.039 172.639 139.5 171.479 139.5H6.97084C5.81044 139.5 4.69757 139.039 3.87705 138.219C3.05651 137.398 2.59555 136.285 2.59555 135.125C2.59555 133.964 3.05651 132.851 3.87705 132.031C4.69756 131.21 5.81043 130.749 6.97084 130.749H12.8461H14.3461V129.249V84.1345V79.5938L11.6413 83.241L10.503 84.7759L10.4754 84.8131L10.4501 84.852C10.128 85.3475 9.7089 85.7727 9.21799 86.1018C8.7271 86.4309 8.17462 86.6572 7.59387 86.7669C7.01313 86.8766 6.41618 86.8676 5.83905 86.7403C5.2619 86.6129 4.71654 86.37 4.23587 86.0262C3.75519 85.6823 3.34916 85.2446 3.04229 84.7395C2.73541 84.2344 2.53405 83.6724 2.45035 83.0873C2.36665 82.5023 2.40235 81.9063 2.55529 81.3354C2.70824 80.7645 2.97526 80.2306 3.34024 79.7657L3.36126 79.739L3.38105 79.7113L32.7528 38.5907C32.7535 38.5897 32.7543 38.5888 32.755 38.5878C33.0543 38.1741 33.4238 37.816 33.8467 37.5297L33.8467 37.5297L33.8578 37.5221L83.4967 3.2618L83.5049 3.25607L83.5641 3.21463C85.2457 2.09657 87.2201 1.5 89.2397 1.5C91.2592 1.5 93.2336 2.09655 94.9152 3.2146L94.9745 3.25618L94.9819 3.26127L144.547 37.5142L144.553 37.5183L144.559 37.5224C144.982 37.8086 145.352 38.1667 145.651 38.5804C145.652 38.5814 145.652 38.5824 145.653 38.5833L175.025 79.7039L175.045 79.7316L175.066 79.7584C175.431 80.2232 175.698 80.7572 175.851 81.3281C176.004 81.899 176.039 82.4949 175.956 83.08C175.872 83.665 175.67 84.2271 175.364 84.7322C175.057 85.2372 174.651 85.6749 174.17 86.0188C173.689 86.3627 173.144 86.6056 172.567 86.7329C171.99 86.8602 171.393 86.8693 170.812 86.7596C170.231 86.6498 169.679 86.4236 169.188 86.0945C168.697 85.7654 168.278 85.3402 167.956 84.8446L167.937 84.8162L167.917 84.7886L166.823 83.261L164.104 79.4648V84.1345V129.249ZM23.3761 66.8118L23.0967 67.203V67.6837V129.249V130.749H24.5967H42.2226H43.7226V129.249V76.3718C43.7226 75.2114 44.1836 74.0985 45.0041 73.278C45.8246 72.4574 46.9375 71.9965 48.0979 71.9965H130.352C131.512 71.9965 132.625 72.4574 133.446 73.278C134.266 74.0985 134.727 75.2114 134.727 76.3718V129.249V130.749H136.227H153.853H155.353V129.249V67.6837V67.2031L155.074 66.812L139.137 44.4932L138.985 44.2797L138.769 44.1306L90.0773 10.5092L89.2249 9.92062L88.3725 10.5093L39.681 44.138L39.4653 44.287L39.3129 44.5004L23.3761 66.8118ZM88.3524 99.7491L89.225 100.373L90.0975 99.7491L112.864 83.4672L116.668 80.7471H111.992H66.4582H61.7822L65.5856 83.4672L88.3524 99.7491ZM125.977 87.7919V84.8776L123.605 86.5712L98.4588 104.528L96.7496 105.748L98.4585 106.969L123.605 124.933L125.977 126.627V123.712V87.7919ZM79.9914 106.969L81.7003 105.748L79.9911 104.528L54.8449 86.5712L52.4732 84.8776V87.7919V123.712V126.627L54.8451 124.933L79.9914 106.969ZM90.0975 111.747L89.225 111.123L88.3524 111.747L65.5856 128.029L61.7822 130.749H66.4582H111.992H116.668L112.864 128.029L90.0975 111.747ZM73.0991 52.8706C73.0991 51.7102 73.5601 50.5973 74.3806 49.7768C75.2011 48.9563 76.314 48.4953 77.4744 48.4953H100.976C102.136 48.4953 103.249 48.9563 104.069 49.7768C104.89 50.5973 105.351 51.7102 105.351 52.8706C105.351 54.031 104.89 55.1439 104.069 55.9644C103.249 56.7849 102.136 57.2459 100.976 57.2459H77.4744C76.314 57.2459 75.2011 56.7849 74.3806 55.9644C73.5601 55.1439 73.0991 54.031 73.0991 52.8706Z"
            fill="#00638C"
            stroke="#F2F6F8"
            stroke-width="3"
          />
        </svg>
      ),
      title: "Área dentro del campo",
      listItems: [
        "Alimentación de nuestros rescatados.",
        "Cuidado y curación de los rescatados.",
        "Limpieza y armado de camas.",
        "Guardias nocturnas.",
        "Ayuda para levantar a los rescatados si no pueden.",
      ],
    },
  ];

  return (
    <div className=" m-mobile p-mobile maxWidth-content pt-[70px] lg:pt-[90px]  ">
      <TitleSection
        titleTextContent="Convertite en voluntario"
        spanTextContent="Sumate a nuestro equipo. Dado que no contamos con ningún subsidio de parte del Estado, realizamos las tareas gracias al apoyo de nuestros voluntarios."
      />
      <section>
        <h1 className="text-[18px] font-extrabold text-primary ">
          ¿Qué tipo de voluntariado puedo realizar?{" "}
        </h1>
        <div className=" flex flex-col  gap-10 my-16 ">
          {items.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center gap-4 "
              key={index}>
              {item.image}
              <h3 className="text-[18px] font-extrabold text-primary">
                {item.title}
              </h3>
              <ul className="list-disc list-inside ">
                {item.listItems.map((listItem, index) => (
                  <li className="pl-4" key={index}>
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h1 className="text-[18px] my-[50px] font-extrabold text-primary ">
          Si quieres ser voluntario
        </h1>

        <AdopcionesCard
          cardContent={textForContactCard}
          titleCard={titleForContactCard}
        />
      </section>
    </div>
  );
}

export default Voluntariado;
