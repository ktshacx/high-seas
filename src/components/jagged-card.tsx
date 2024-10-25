import React from "react";

const JaggedCard = ({ children, className = "", ...props }) => {
  return (
    <div className={`relative w-full ${className}`} {...props}>
      <svg
        width="805"
        height="590"
        viewBox="0 0 805 590"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M188.434 582.006L93.2779 585H69.3746C69.3503 585 69.3261 584.998 69.3021 584.995L48.963 582.013C48.9143 582.006 48.8649 582.006 48.8162 582.014L28.9767 584.994C28.9521 584.998 28.9273 585 28.9024 585H15.2298C15.0697 585 14.9192 584.923 14.8252 584.794L11.0467 579.59C11.006 579.534 10.9774 579.47 10.9627 579.402L8.51741 568.135C8.50021 568.056 8.50254 567.974 8.52422 567.896L10.9631 559.101C10.9776 559.049 10.9834 558.995 10.9805 558.941L8.49122 513.062V441.624L10.9821 396.714C10.984 396.68 10.9824 396.645 10.9772 396.611L8.50354 380.258C8.49538 380.204 8.4961 380.149 8.50567 380.095L10.9722 366.26C10.9806 366.213 10.9822 366.164 10.9767 366.116L8.49812 344.268C8.49353 344.228 8.49389 344.187 8.49919 344.147L10.9777 325.279C10.9825 325.243 10.9834 325.207 10.9799 325.17C10.1471 316.158 8.49122 297.844 8.49122 296.249V280.762L10.9784 261.33C10.9827 261.296 10.9836 261.262 10.9809 261.227L8.49122 229.806V220.875C8.49122 220.835 8.49621 220.794 8.5061 220.754L10.9336 211.028C10.9664 210.897 10.9444 210.758 10.8727 210.643L8.56702 206.947C8.51748 206.868 8.49122 206.776 8.49122 206.683V197.834V181.848V175.853L5.00965 121.052C5.00336 120.953 5.02665 120.854 5.07657 120.769L8.36353 115.124C8.44379 114.987 8.45349 114.819 8.38966 114.673L5.07382 107.081C5.02618 106.972 5.01901 106.85 5.05362 106.736L8.46962 95.4931C8.48394 95.446 8.49122 95.397 8.49122 95.3478V50.5089C8.49122 50.4769 8.48815 50.445 8.48205 50.4136L5.02575 32.609C5.00889 32.5221 5.01538 32.4323 5.04457 32.3487L8.46323 22.565C8.48176 22.512 8.49122 22.4562 8.49122 22.4001V16.2804C8.49122 16.1011 8.58722 15.9356 8.74284 15.8465L15.3212 12.0812C15.4199 12.0247 15.5349 12.0036 15.6472 12.0212L40.8538 15.9817C40.8909 15.9876 40.9286 15.9892 40.9661 15.9866L98.2654 11.994L156.006 15.9826C156.081 15.9878 156.156 15.976 156.226 15.948L166.005 12.0298C166.064 12.0061 166.124 11.994 166.188 11.994H231.929H253.84C253.863 11.994 253.886 11.9957 253.909 11.999L281.622 15.9645C281.739 15.9813 281.859 15.9558 281.959 15.8927L299.12 5.08804C299.211 5.03087 299.318 5.00443 299.424 5.01263L390.53 11.994L499.718 5.0024C499.743 5.0008 499.768 5.00108 499.793 5.00322L627.393 15.987C627.421 15.9894 627.448 15.9895 627.475 15.9874L679.304 11.994H698.755H745.069C745.115 11.994 745.16 11.9877 745.204 11.9754L769.934 5.03951C770.026 5.01371 770.124 5.01481 770.215 5.04266L792.663 11.886C792.874 11.9501 793.018 12.1443 793.018 12.3643V23.9305C793.018 23.9658 793.021 24.0011 793.029 24.0356L799.964 56.2894C799.987 56.3972 799.974 56.5096 799.927 56.6092L795.069 66.8278C795.032 66.9057 795.016 66.9918 795.022 67.0778L799.997 137.339C799.999 137.37 799.998 137.402 799.994 137.433L793.031 196.218C793.022 196.295 793.031 196.373 793.057 196.446L799.957 215.698C799.985 215.777 799.993 215.862 799.98 215.944L795.022 247.733C795.016 247.771 795.014 247.81 795.017 247.849L799.994 311.66C799.998 311.71 799.994 311.76 799.983 311.81L795.025 333.662C795.017 333.698 795.013 333.735 795.013 333.773V363.191L793.03 383.05C793.022 383.131 793.034 383.214 793.065 383.289L799.941 400.015C799.979 400.109 799.988 400.212 799.967 400.311L795.026 423.079C795.017 423.119 795.013 423.16 795.015 423.201L799.984 578.989C799.993 579.271 799.766 579.505 799.484 579.505H795.363C795.153 579.505 794.965 579.636 794.893 579.834L793.137 584.671C793.065 584.868 792.878 585 792.667 585H787.531H756.609L722.196 582.003H703.296C703.261 582.003 703.226 582.006 703.192 582.014L689.33 584.989C689.296 584.996 689.261 585 689.226 585H673.817L633.918 582.003H582.547L499.257 585H486.879C486.819 585 486.759 584.989 486.703 584.968L478.912 582.042C478.843 582.016 478.77 582.005 478.698 582.011L439.906 585L318.711 582.003L212.043 584.998C212.001 584.999 211.958 584.995 211.917 584.986L199.282 582.065C199.114 582.026 198.938 582.077 198.816 582.199L196.253 584.766C196.111 584.908 195.899 584.952 195.713 584.877L188.635 582.042C188.571 582.016 188.503 582.004 188.434 582.006Z"
          stroke="#48BBFE"
          fill="#48BBFE"
          stroke-width="9"
          stroke-linecap="round"
        />
      </svg>
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
};

export default JaggedCard;
