"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Search,
    PhoneCall,
    Plus,
    Heart,
    Droplets,
    Zap,
    Activity,
    User,
    Baby,
    Stethoscope,
    ShieldCheck,
    Building2,
    Users2,
    ShoppingCart,
    X,
    Trash2,
    FlaskConical,
    Syringe,
    Thermometer,
    Scan,
    Bone,
    Pipette,
    Radiation,
    HeartPulse,
    Minus,
    ArrowRight,
    Clock,
    Truck,
    Award
} from "lucide-react";
import { siteConfig } from "@/data/site";

// --- Types ---

interface SubTest {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    description?: string;
    image?: string;
    icon?: React.ReactNode;
}

interface Category {
    id: number;
    name: string;
    icon: React.ReactNode;
    hasOffer: boolean;
    subTests?: SubTest[];
    color?: string;
}

interface Test {
    id: number | string;
    name: string;
    includes: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    icon: React.ReactNode;
    image?: string;
}

interface CartItem extends Test {
    quantity: number;
}

// --- Mock Data ---

const categories: Category[] = [
    {
        id: 1, name: "Full Body Checkup", icon: <Stethoscope className="text-blue-500" />, hasOffer: true, color: "blue",
        subTests: [
            { id: "fb1", name: "Essential Full Body Checkup", price: 999, originalPrice: 1999, description: "CBC, Lipid, Liver, Kidney", image: "https://images.unsplash.com/photo-1579152276507-575ec6ad7d64?w=400&h=300&fit=crop" },
            { id: "fb2", name: "Advanced Full Body Checkup", price: 1999, originalPrice: 3999, description: "60+ Tests Included", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" },
            { id: "fb3", name: "Comprehensive Checkup", price: 2999, originalPrice: 5999, description: "80+ Tests with Vitamins", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 2, name: "Diabetes", icon: <Activity className="text-orange-500" />, hasOffer: true, color: "orange",
        subTests: [
            { id: "d1", name: "HbA1c", price: 450, originalPrice: 800, description: "3-month blood sugar average", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
            { id: "d2", name: "Fasting Blood Sugar", price: 100, originalPrice: 200, description: "Overnight fasting required", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
            { id: "d3", name: "Post Prandial Blood Sugar", price: 100, originalPrice: 200, description: "2 hours after meal", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
            { id: "d4", name: "Insulin Fasting", price: 600, originalPrice: 1000, description: "Fasting insulin levels", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
        ]
    },
    { id: 3, name: "Heart", icon: <Heart className="text-red-500" />, hasOffer: true, color: "red" },
    { id: 4, name: "Blood Studies", icon: <Droplets className="text-red-600" />, hasOffer: true, color: "rose" },
    { id: 5, name: "Vitamin", icon: <Zap className="text-yellow-500" />, hasOffer: true, color: "yellow" },
    { id: 6, name: "Thyroid", icon: <Activity className="text-purple-500" />, hasOffer: true, color: "purple" },
];

const labTestCategories: Category[] = [
    {
        id: 18, name: "Blood Sugar", icon: <Pipette className="text-cyan-600" />, hasOffer: true, color: "cyan",
        subTests: [
            { id: "l1", name: "Fasting Blood Sugar", price: 100, originalPrice: 200, description: "Overnight fasting", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
            { id: "l2", name: "Post Prandial", price: 100, originalPrice: 200, description: "After meal", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
            { id: "l3", name: "Random Blood Sugar", price: 80, originalPrice: 150, description: "Any time of day", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 19, name: "Lipid Profile", icon: <FlaskConical className="text-blue-500" />, hasOffer: true, color: "blue",
        subTests: [
            { id: "lp1", name: "Complete Lipid Profile", price: 800, originalPrice: 1500, description: "Cholesterol, HDL, LDL, TG", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
            { id: "lp2", name: "Cholesterol Total", price: 200, originalPrice: 400, description: "Total cholesterol", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" },
            { id: "lp3", name: "HDL Cholesterol", price: 300, originalPrice: 500, description: "Good cholesterol", image: "https://images.unsplash.com/photo-1579152276507-575ec6ad7d64?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 20, name: "Thyroid Profile", icon: <HeartPulse className="text-purple-500" />, hasOffer: true, color: "purple",
        subTests: [
            { id: "t1", name: "T3 T4 TSH", price: 500, originalPrice: 900, description: "Complete thyroid panel", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
            { id: "t2", name: "TSH Only", price: 250, originalPrice: 450, description: "Thyroid stimulating hormone", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 21, name: "Liver Function", icon: <Activity className="text-green-600" />, hasOffer: false, color: "green",
        subTests: [
            { id: "lf1", name: "LFT Complete", price: 700, originalPrice: 1200, description: "SGOT, SGPT, Bilirubin", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 22, name: "Kidney Function", icon: <FlaskConical className="text-blue-400" />, hasOffer: true, color: "sky",
        subTests: [
            { id: "kf1", name: "KFT Complete", price: 650, originalPrice: 1100, description: "Creatinine, Urea, Uric Acid", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 23, name: "Complete Hemogram", icon: <Droplets className="text-red-500" />, hasOffer: true, color: "red",
        subTests: [
            { id: "ch1", name: "CBC with ESR", price: 450, originalPrice: 800, description: "Complete blood count", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 24, name: "Vitamin B12", icon: <Zap className="text-yellow-600" />, hasOffer: false, color: "amber",
        subTests: [
            { id: "vb1", name: "Vitamin B12 Serum", price: 600, originalPrice: 1000, description: "B12 deficiency test", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 25, name: "Urine Routine", icon: <FlaskConical className="text-amber-500" />, hasOffer: true, color: "orange",
        subTests: [
            { id: "ur1", name: "Urine Routine & Microscopy", price: 150, originalPrice: 300, description: "Complete urine analysis", image: "https://images.unsplash.com/photo-1579152276507-575ec6ad7d64?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 26, name: "Allergy Test", icon: <Syringe className="text-orange-500" />, hasOffer: false, color: "orange",
        subTests: [
            { id: "at1", name: "Allergy Panel Basic", price: 2500, originalPrice: 4000, description: "Common allergens test", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 27, name: "Infection Screen", icon: <Thermometer className="text-red-400" />, hasOffer: true, color: "rose",
        subTests: [
            { id: "is1", name: "Infection Panel", price: 1200, originalPrice: 2000, description: "Common infection markers", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
        ]
    },
];

const radiologyCategories: Category[] = [
    {
        id: 30, name: "CT Scan", icon: <Activity className="text-slate-700" />, hasOffer: false, color: "slate",
        subTests: [
            { id: "ct1", name: "CT Brain", price: 3500, originalPrice: 5000, description: "Plain CT", image: "https://images.unsplash.com/photo-1516069677019-8d8c3b2b9b3c?w=400&h=300&fit=crop" },
            { id: "ct2", name: "CT Chest", price: 4000, originalPrice: 6000, description: "HRCT", image: "https://images.unsplash.com/photo-1582719471384-9a5e5b5e5b5e?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 31, name: "MRI Scan", icon: <Zap className="text-blue-400" />, hasOffer: true, color: "sky",
        subTests: [
            { id: "mr1", name: "MRI Brain", price: 5500, originalPrice: 8000, description: "With contrast", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
            { id: "mr2", name: "MRI Spine", price: 6000, originalPrice: 9000, description: "Single region", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 32, name: "Mammography", icon: <User className="text-pink-400" />, hasOffer: false, color: "pink",
        subTests: [
            { id: "mg1", name: "Digital Mammogram", price: 1800, originalPrice: 3000, description: "Bilateral", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 33, name: "DEXA Scan", icon: <Bone className="text-slate-400" />, hasOffer: true, color: "gray",
        subTests: [
            { id: "dx1", name: "Bone Densitometry", price: 1500, originalPrice: 2500, description: "Osteoporosis screening", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 34, name: "Echocardiogram", icon: <Heart className="text-red-500" />, hasOffer: true, color: "red",
        subTests: [
            { id: "ec1", name: "2D Echo", price: 2000, originalPrice: 3500, description: "Color Doppler", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 35, name: "TMT / Stress Test", icon: <HeartPulse className="text-green-500" />, hasOffer: false, color: "green",
        subTests: [
            { id: "tm1", name: "Treadmill Test", price: 1800, originalPrice: 3000, description: "Cardiac stress test", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 36, name: "Color Doppler", icon: <Activity className="text-cyan-500" />, hasOffer: true, color: "cyan",
        subTests: [
            { id: "cd1", name: "Carotid Doppler", price: 1500, originalPrice: 2500, description: "Neck vessels", image: "https://images.unsplash.com/photo-1579152276507-575ec6ad7d64?w=400&h=300&fit=crop" },
        ]
    },
    {
        id: 37, name: "ECG", icon: <Activity className="text-blue-800" />, hasOffer: true, color: "blue",
        subTests: [
            { id: "eg1", name: "Resting ECG", price: 300, originalPrice: 500, description: "12-lead ECG", image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
        ]
    },
];

const topTests: Test[] = [
    { id: 1, name: "Complete Blood Count", includes: "CBC with ESR", price: 439, originalPrice: 1098, discount: "60% off", icon: <Droplets />, image: "https://images.unsplash.com/photo-1579152276507-575ec6ad7d64?w=400&h=300&fit=crop" },
    { id: 2, name: "Diabetes Screen", includes: "HbA1c & FBS", price: 659, originalPrice: 1647, discount: "60% off", icon: <Activity />, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
    { id: 3, name: "Heart Health", includes: "Lipid & ECG", price: 999, originalPrice: 2499, discount: "60% off", icon: <Heart />, image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop" },
    { id: 4, name: "Thyroid Profile", includes: "T3 T4 TSH", price: 499, originalPrice: 999, discount: "50% off", icon: <Activity />, image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
    { id: 5, name: "Liver Function", includes: "LFT Complete", price: 699, originalPrice: 1399, discount: "50% off", icon: <ShieldCheck />, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
    { id: 6, name: "Kidney Function", includes: "KFT Complete", price: 649, originalPrice: 1299, discount: "50% off", icon: <FlaskConical />, image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop" },
    { id: 7, name: "Vitamin D Test", includes: "25-OH Vitamin D", price: 899, originalPrice: 1799, discount: "50% off", icon: <Zap />, image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
    { id: 8, name: "Lipid Profile", includes: "Complete Lipid", price: 399, originalPrice: 799, discount: "50% off", icon: <Heart />, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop" },
    { id: 9, name: "Iron Studies", includes: "Serum Iron & TIBC", price: 549, originalPrice: 1099, discount: "50% off", icon: <Droplets />, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop" },
    { id: 10, name: "Vitamin B12", includes: "B12 Serum", price: 599, originalPrice: 1199, discount: "50% off", icon: <Zap />, image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" },
];

const womenCareCategories: Category[] = [
    { id: 13, name: "PCOD Screening", icon: <User className="text-pink-500" />, hasOffer: true, color: "pink" },
    { id: 14, name: "Blood Studies", icon: <Droplets className="text-red-600" />, hasOffer: true, color: "rose" },
    { id: 15, name: "Pregnancy", icon: <Baby className="text-purple-400" />, hasOffer: false, color: "purple" },
    { id: 16, name: "Iron Studies", icon: <Activity className="text-orange-400" />, hasOffer: true, color: "orange" },
    { id: 17, name: "Vitamin", icon: <Zap className="text-yellow-500" />, hasOffer: true, color: "yellow" },
];

const menCareCategories: Category[] = [
    {
        id: 40, name: "Prostate Screen", icon: <Activity className="text-blue-600" />, hasOffer: true, color: "blue",
        subTests: [
            { id: "m401", name: "PSA (Total)", price: 850, originalPrice: 1200, icon: <Activity />, description: "Prostate Specific Antigen screening" },
            { id: "m402", name: "PSA (Free/Total Ratio)", price: 1500, originalPrice: 2000, icon: <Activity />, description: "Detailed risk assessment" }
        ]
    },
    {
        id: 41, name: "Testosterone", icon: <Zap className="text-orange-500" />, hasOffer: true, color: "orange",
        subTests: [
            { id: "m411", name: "Total Testosterone", price: 950, originalPrice: 1500, icon: <Zap />, description: "Hormone level screening" },
            { id: "m412", name: "Free Testosterone", price: 1800, originalPrice: 2500, icon: <Zap />, description: "Bio-available hormone check" }
        ]
    },
    {
        id: 42, name: "Cardiac Health", icon: <Heart className="text-red-500" />, hasOffer: true, color: "red",
        subTests: [
            { id: "m421", name: "Cardiac Risk Marker", price: 2500, originalPrice: 3500, icon: <Heart />, description: "Comprehensive heart health" },
            { id: "m422", name: "Lipid Profile (Premium)", price: 1200, originalPrice: 1800, icon: <Heart />, description: "Detailed cholesterol scan" }
        ]
    },
    {
        id: 43, name: "Smoking Side Effects", icon: <Activity className="text-slate-700" />, hasOffer: false, color: "slate",
        subTests: [
            { id: "m431", name: "COPD Screening", price: 2000, originalPrice: 3000, icon: <Activity />, description: "Lungs evaluation" },
            { id: "m432", name: "Vitamin C Level", price: 1500, originalPrice: 2200, icon: <Activity />, description: "Antioxidant status" }
        ]
    },
    {
        id: 44, name: "Liver Function", icon: <ShieldCheck className="text-green-600" />, hasOffer: true, color: "green",
        subTests: [
            { id: "m441", name: "LFT (Basic)", price: 650, originalPrice: 900, icon: <ShieldCheck />, description: "Standard enzymes check" },
            { id: "m442", name: "LFT (Advanced)", price: 1200, originalPrice: 1800, icon: <ShieldCheck />, description: "Bilirubin & Proteins" }
        ]
    },
];

const childCareCategories: Category[] = [
    {
        id: 50, name: "Growth Check", icon: <Baby className="text-purple-500" />, hasOffer: true, color: "purple",
        subTests: [
            { id: "c501", name: "Growth Hormone", price: 3500, originalPrice: 5000, icon: <Activity />, description: "Developmental health" },
            { id: "c502", name: "Thyroid (Chid)", price: 800, originalPrice: 1200, icon: <Zap />, description: "Metabolic screening" }
        ]
    },
    {
        id: 51, name: "Immunity", icon: <ShieldCheck className="text-emerald-500" />, hasOffer: false, color: "emerald",
        subTests: [
            { id: "c511", name: "IgE Level", price: 1500, originalPrice: 2200, icon: <ShieldCheck />, description: "Allergy status" },
            { id: "c512", name: "CBC (Pediatric)", price: 450, originalPrice: 600, icon: <Activity />, description: "Complete blood count" }
        ]
    },
    {
        id: 52, name: "Nutrition Profile", icon: <Zap className="text-yellow-500" />, hasOffer: true, color: "yellow",
        subTests: [
            { id: "c521", name: "Iron Studies", price: 1200, originalPrice: 1800, icon: <Zap />, description: "Anemia screening" },
            { id: "c522", name: "Vitamin D (Child)", price: 1500, originalPrice: 2500, icon: <Zap />, description: "Bone growth marker" }
        ]
    },
    {
        id: 53, name: "Allergy Panel", icon: <Droplets className="text-rose-500" />, hasOffer: true, color: "rose",
        subTests: [
            { id: "c531", name: "Milk Allergy", price: 1800, originalPrice: 2500, icon: <Droplets />, description: "Lactose sensitivity" },
            { id: "c532", name: "Pediatric Allergy", price: 4500, originalPrice: 6000, icon: <Droplets />, description: "50+ allergens" }
        ]
    },
];

const olderlyCareCategories: Category[] = [
    {
        id: 60, name: "Senior Full Body", icon: <Users2 className="text-slate-600" />, hasOffer: true, color: "slate",
        subTests: [
            { id: "e601", name: "Senior Gold Package", price: 4500, originalPrice: 7000, icon: <Users2 />, description: "80+ parameters" },
            { id: "e602", name: "Senior Platinum", price: 8500, originalPrice: 12000, icon: <Users2 />, description: "All-inclusive health scan" }
        ]
    },
    {
        id: 61, name: "Bone Health", icon: <Bone className="text-blue-500" />, hasOffer: true, color: "blue",
        subTests: [
            { id: "e611", name: "DEXA Scan (Spine)", price: 2500, originalPrice: 3500, icon: <Bone />, description: "Bone density evaluation" },
            { id: "e612", name: "Calcium & Vitamin D", price: 1800, originalPrice: 2800, icon: <Bone />, description: "Essential minerals" }
        ]
    },
    {
        id: 62, name: "Arthritic Check", icon: <Activity className="text-indigo-600" />, hasOffer: true, color: "indigo",
        subTests: [
            { id: "e621", name: "RA Factor", price: 850, originalPrice: 1200, icon: <Activity />, description: "Rheumatoid screening" },
            { id: "e622", name: "Anti CCP", price: 2200, originalPrice: 3000, icon: <Activity />, description: "Early joint health check" }
        ]
    },
    {
        id: 63, name: "Memory Screen", icon: <Zap className="text-purple-500" />, hasOffer: false, color: "purple",
        subTests: [
            { id: "e631", name: "Vitamin B12", price: 1200, originalPrice: 1800, icon: <Zap />, description: "Nerve health marker" },
            { id: "e632", name: "TSH (Senile)", price: 550, originalPrice: 800, icon: <Zap />, description: "Endocrine health" }
        ]
    },
];

// --- Components ---

const CategoryCard = ({ category, onClick, isSelected }: { category: Category; onClick: () => void; isSelected: boolean }) => (
    <motion.div
        whileHover={{ y: -5 }}
        onClick={onClick}
        className={`group flex items-center gap-3 rounded-xl border p-4 shadow-sm transition-all hover:shadow-md cursor-pointer ${isSelected ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100 hover:border-blue-100'
            }`}
    >
        <div className={`relative flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${isSelected ? 'bg-white' : 'bg-slate-50 group-hover:bg-blue-50'
            }`}>
            {category.icon}
            {category.hasOffer && (
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 border-2 border-white shadow-sm">
                    <span className="text-[10px] font-bold text-white">%</span>
                </div>
            )}
        </div>
        <span className={`text-sm font-semibold line-clamp-1 ${isSelected ? 'text-blue-700' : 'text-slate-700 group-hover:text-blue-600'
            }`}>
            {category.name}
        </span>
    </motion.div>
);

// Premium Test Card for Lab Tests & Radiology
const PremiumTestCard = ({ test, onAddToCart }: { test: SubTest; onAddToCart: (t: SubTest) => void }) => {
    const discount = test.originalPrice ? Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100) : 0;

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
            {/* Image Section */}
            <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {test.image ? (
                    <Image
                        src={test.image}
                        alt={test.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl">🔬</div>
                )}
                {discount > 0 && (
                    <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        {discount}% OFF
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                <h4 className="text-base font-bold text-slate-900 line-clamp-1">{test.name}</h4>
                {test.description && (
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">{test.description}</p>
                )}

                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-[#007084]">₹{test.price}</span>
                            {test.originalPrice && (
                                <span className="text-xs text-slate-400 line-through">₹{test.originalPrice}</span>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => onAddToCart(test)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007084] text-white shadow-md transition-all hover:bg-[#005a6b] hover:shadow-lg active:scale-95"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// Compact Test Card for Top Booked Tests
const CompactTestCard = ({ test, onAddToCart }: { test: Test; onAddToCart: (t: Test) => void }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="group relative min-w-[200px] w-[200px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-xl"
    >
        {/* Image Section */}
        <div className="relative h-32 w-full overflow-hidden">
            {test.image && (
                <>
                    <Image
                        src={test.image}
                        alt={test.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </>
            )}
            {test.discount && (
                <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    {test.discount}
                </div>
            )}
        </div>

        {/* Content */}
        <div className="p-4">
            <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{test.name}</h4>
            <p className="mt-0.5 text-[10px] text-slate-500">{test.includes}</p>

            <div className="mt-3 flex items-center justify-between">
                <div>
                    <span className="text-lg font-black text-[#007084]">₹{test.price}</span>
                    {test.originalPrice && (
                        <span className="ml-1.5 text-[10px] text-slate-400 line-through">₹{test.originalPrice}</span>
                    )}
                </div>

                <button
                    onClick={() => onAddToCart(test)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#007084] text-white transition-all hover:bg-[#005a6b] active:scale-95"
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    </motion.div>
);

export default function DiagnosticsHome() {
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    const allCategories = useMemo(() => [
        ...categories,
        ...womenCareCategories,
        ...menCareCategories,
        ...childCareCategories,
        ...olderlyCareCategories,
        ...labTestCategories,
        ...radiologyCategories
    ], []);

    const selectedCategory = useMemo(() => {
        return allCategories.find(c => c.id === selectedCategoryId);
    }, [selectedCategoryId, allCategories]);

    const addToCart = (item: Test | SubTest) => {
        setCart(prev => {
            const existing = prev.find(cartItem => cartItem.id === item.id);
            if (existing) {
                return prev.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prev, { ...item, quantity: 1, includes: 'includes' in item ? item.includes : '', icon: 'icon' in item ? item.icon : <FlaskConical /> }];
        });
    };

    const updateQuantity = (id: string | number, delta: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === id);
            if (existing) {
                const newQuantity = existing.quantity + delta;
                if (newQuantity <= 0) {
                    return prev.filter(item => item.id !== id);
                }
                return prev.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                );
            }
            return prev;
        });
    };

    const removeFromCart = (id: string | number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const checkoutViaWhatsApp = () => {
        if (cart.length === 0) return;

        const itemsList = cart.map((item, i) => `${i + 1}. ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`).join("\n");
        const message = `🛒 *CrossMed Diagnostics Order*\n\n${itemsList}\n\n━━━━━━━━━━━━━━━━\n💰 *Total Amount: ₹${totalPrice}*\n📦 *Total Items: ${totalItems}*\n━━━━━━━━━━━━━━━━\n\n👤 Name:\n📍 Address:\n📞 Phone:\n\nPlease confirm my booking.`;
        const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-20">

            {/* Header */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl px-6 py-4 shadow-sm mt-22">
                <div className="mx-auto max-w-7xl flex items-center justify-center gap-4">


                    <div className="flex items-center gap-3 flex-1 max-w-xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search tests, packages..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#007084] focus:bg-white focus:ring-4 focus:ring-cyan-50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#007084] text-white shadow-md transition-all hover:bg-[#005a6b] hover:scale-105"
                        >
                            <ShoppingCart size={20} />
                            {totalItems > 0 && (
                                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold border-2 border-white">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-8 space-y-12">

                {/* Stats Banner */}
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { icon: Clock, label: "Sample Collection", value: "6 AM - 9 PM" },
                        { icon: Truck, label: "Free Home Pickup", value: "Available" },
                        { icon: Award, label: "Certified", value: "NABL Labs" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                            <stat.icon className="text-[#007084] mb-2" size={24} />
                            <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                            <p className="text-sm font-bold text-slate-800">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="text-center pt-4">
                    <h2 className="text-4xl font-black text-slate-800 mb-2">
                        Explore Our Lab Services
                    </h2>
                    <p className="text-zinc-600 font-medium">
                        Find exactly what you&apos;re looking for or explore our specialty health checks.
                    </p>
                </div>

                {/* Section: Top Booked Tests - Compact Cards */}
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black text-slate-900">Top Booked Tests</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Most popular diagnostic tests</p>
                        </div>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                            {topTests.map((test) => (
                                <CompactTestCard key={test.id} test={test} onAddToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: Doctor Created Health Checks */}
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black text-slate-900">Health Checkup Packages</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Curated by doctors</p>
                        </div>
                    </div>

                    {/* Sub-tests Area */}
                    {selectedCategoryId && categories.some(c => c.id === selectedCategoryId) && selectedCategory && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-blue-900">{selectedCategory.name} Tests</h3>
                                <button onClick={() => setSelectedCategoryId(null)} className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-500">
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedCategory.subTests?.map((sub) => (
                                    <PremiumTestCard key={sub.id} test={sub} onAddToCart={addToCart} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {categories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>

                {/* Section: Lab Tests - Premium Cards */}
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black text-slate-900">Lab Tests ({labTestCategories.length})</h2>
                            <p className="text-xs text-slate-500 mt-0.5">Blood, urine & pathology tests</p>
                        </div>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Sub-tests area for lab tests */}
                    {selectedCategoryId && labTestCategories.some(c => c.id === selectedCategoryId) && selectedCategory && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-6 overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-cyan-900">{selectedCategory.name} Tests</h3>
                                <button onClick={() => setSelectedCategoryId(null)} className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-500">
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedCategory.subTests?.map((sub) => (
                                    <PremiumTestCard key={sub.id} test={sub} onAddToCart={addToCart} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {labTestCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>

                {/* Section: Radiology Tests - Premium Cards */}
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-black text-slate-900">Radiology Tests ({radiologyCategories.length})</h2>
                            <p className="text-xs text-slate-500 mt-0.5">X-Ray, MRI, CT Scan & more</p>
                        </div>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Sub-tests area for radiology tests */}
                    {selectedCategoryId && radiologyCategories.some(c => c.id === selectedCategoryId) && selectedCategory && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-6 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-indigo-900">{selectedCategory.name} Tests</h3>
                                <button onClick={() => setSelectedCategoryId(null)} className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-500">
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedCategory.subTests?.map((sub) => (
                                    <PremiumTestCard key={sub.id} test={sub} onAddToCart={addToCart} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {radiologyCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>

                {/* Section: women care */}

                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Women&apos;s Care</h2>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {womenCareCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>


                {/* Section: men care */}

                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Men Care</h2>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {menCareCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>

                {/* Section: child care */}

                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Child Care</h2>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {childCareCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>


                {/* Partner Banner */}
                <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#007084] to-cyan-700 p-8 md:p-10">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" viewBox="0 0 400 200">
                            <circle cx="350" cy="50" r="80" fill="white" />
                            <circle cx="300" cy="150" r="50" fill="white" />
                            <circle cx="380" cy="120" r="30" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">CrossMedi Diagnostics</h3>
                            <p className="mt-2 text-cyan-100">Your Trusted Healthcare Partner</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "50K+", sub: "Happy Patients", icon: <Users2 size={28} /> },
                                { label: "100+", sub: "Collection Centers", icon: <Building2 size={28} /> },
                                { label: "NABL", sub: "Certified Labs", icon: <ShieldCheck size={28} /> },
                                { label: "24/7", sub: "Report Access", icon: <Clock size={28} /> },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-2">
                                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">{stat.icon}</div>
                                    <p className="text-xl font-bold">{stat.label}</p>
                                    <p className="text-xs text-cyan-100">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: olderly care */}

                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Olderly Care</h2>
                        <Link href="#" className="flex items-center gap-1 text-sm font-bold text-[#007084] hover:underline">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {olderlyCareCategories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                onClick={() => setSelectedCategoryId(cat.id === selectedCategoryId ? null : cat.id)}
                                isSelected={selectedCategoryId === cat.id}
                            />
                        ))}
                    </div>
                </section>

            </div>

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="fixed inset-0 z-200 flex justify-end bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}>
                    <motion.div
                        initial={{ x: 400 }}
                        animate={{ x: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between border-b p-5">
                            <div>
                                <h2 className="text-xl font-black">Your Cart</h2>
                                <p className="text-xs text-slate-500">{totalItems} item(s)</p>
                            </div>
                            <button onClick={() => setIsCartOpen(false)} className="rounded-full p-2 hover:bg-slate-100">
                                <X size={20} />
                            </button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                                <ShoppingCart className="h-16 w-16 text-slate-300 mb-4" />
                                <p className="text-lg font-medium text-slate-600">Your cart is empty</p>
                                <p className="text-sm text-slate-400">Add tests to get started</p>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="mt-6 rounded-full bg-[#007084] px-6 py-2.5 text-sm font-semibold text-white"
                                >
                                    Browse Tests
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4 rounded-xl border p-4">
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm">{item.name}</h4>
                                                <p className="text-xs text-slate-500">{item.includes}</p>
                                                <p className="mt-1 text-lg font-black text-[#007084]">₹{item.price * item.quantity}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                                                    <Trash2 size={16} />
                                                </button>
                                                <div className="flex items-center gap-2">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="rounded-lg border p-1 hover:bg-slate-100">
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="rounded-lg border p-1 hover:bg-slate-100">
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t bg-slate-50 p-5">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-600">Subtotal</span>
                                        <span className="font-bold">₹{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <span className="text-slate-600">Home Collection</span>
                                        <span className="text-green-600 font-medium">FREE</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-3 mb-4">
                                        <span className="text-lg font-bold">Total</span>
                                        <span className="text-xl font-black text-[#007084]">₹{totalPrice}</span>
                                    </div>
                                    <button
                                        onClick={checkoutViaWhatsApp}
                                        className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 py-3.5 font-bold text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                                    >
                                        <WhatsAppIcon /> Checkout via WhatsApp
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            )}

            {/* Floating Call Button */}
            <motion.a
                href={`tel:${siteConfig.phone}`}
                drag
                dragConstraints={{ left: -1000, right: 0, top: -800, bottom: 0 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-100 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl active:scale-95 touch-none"
            >
                <motion.div
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-orange-400"
                />
                <PhoneCall size={28} className="relative z-10" />
            </motion.a>

            <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
}

const WhatsAppIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
);